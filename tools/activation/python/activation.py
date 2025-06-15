#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import logging
import argparse
import serial
from enum import IntEnum

from activation_code import generate_activation_code, Channel


def setup_logger():
    """Configure root logger"""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )


class ProtocolType(IntEnum):
    PROTOCOL_HUAWEI     = 0x1
    PROTOCOL_INCREASE   = 0x2
    PROTOCOL_ZTE3000    = 0x4
    PROTOCOL_INFY       = 0x8
    PROTOCOL_EV_STATION = 0xC
    PROTOCOL_ZEEHO      = 0xD
    PROTOCOL_EV_CHARGER = 0xE
    PROTOCOL_EPS6020    = 0x10
    PROTOCOL_ZTE4875    = 0x20
    PROTOCOL_SER10010K  = 0x40
    PROTOCOL_BH10M100   = 0x41
    PROTOCOL_MC1503N5R  = 0x42
    PROTOCOL_R24_2200   = 0x43

    @staticmethod
    def list_protocols():
        return [p.name.split('_', 1)[1].upper() for p in ProtocolType]

    @staticmethod
    def get_all_support():
        flags = 0
        for protocol in ProtocolType:
            flags |= protocol
        return flags

    @staticmethod
    def decode_protocol(protocol):
        protocol_map = { p.value: p.name.split('_', 1)[1].lower() for p in ProtocolType }
        return protocol_map.get(protocol.value, "unknown")
    
    @staticmethod
    def decode_protocols(protocols):
        decoded_protocols = []
        for protocol in ProtocolType:
            if protocol & protocols:
                decoded_protocols.append(ProtocolType.decode_protocol(protocol))
        return decoded_protocols


def parse_args():
    """Parse command-line arguments"""
    parser = argparse.ArgumentParser(
        description="Serial activation tool for CANControl devices."
    )
    parser.add_argument(
        '-c', '--com-port',
        required=True,
        help="Serial COM port, e.g., COM3 or /dev/ttyUSB0"
    )
    parser.add_argument(
        '-p', '--protocol',
        choices=ProtocolType.list_protocols(),
        default=ProtocolType.decode_protocol(ProtocolType.PROTOCOL_HUAWEI),
        type=str.upper,
        help="Protocol type, one of: %(choices)s"
    )

    parser = parser.parse_args()

    if not parser.protocol.startswith("PROTOCOL_"):
        parser.protocol = "PROTOCOL_" + parser.protocol

    return parser


def get_active_code(chip_id: str) -> str:
    """Generate activation code based on chip ID"""
    return generate_activation_code(chip_id, Channel.S1)


def read_and_activate(ser: serial.Serial, protocol: ProtocolType):
    """Continuously read from serial, parse chip ID, and send activation code"""
    buffer = bytearray()
    while True:
        try:
            incoming = ser.read(ser.in_waiting or 1)
            if not incoming:
                continue
            buffer.extend(incoming)
            if buffer.endswith(b'\r\n'):
                line = buffer.decode('utf-8', 'ignore').strip()
                logging.info(f"Received: {line}")
                buffer.clear()

                if line.startswith("ID:"):
                    parts = line.split(":", 1)
                    chip_id = parts[1].strip()

                    # Send protocol message
                    # SetMSG=11,22,33,44,55
                    # SYS
                    # f2,i8,55
                    # 53,i8,22
                    # 54,i8,33
                    # User
                    # 6e,i8,44
                    msg = f"SetMSG=0,{protocol.value},0,0,0\n"
                    ser.write(msg.encode('utf-8'))
                    logging.info(f"Sent: {msg}")

                    # Send activation code
                    code = get_active_code(chip_id)
                    act_msg = f"Active={code}\n"
                    ser.write(act_msg.encode('utf-8'))
                    logging.info(f"Sent: {act_msg}")
        except serial.SerialException as e:
            logging.error(f"Serial error: {e}")
            break
        except KeyboardInterrupt:
            logging.info("Interrupted by user, closing...")
            break


def main():
    args = parse_args()
    setup_logger()

    protocol = ProtocolType[args.protocol]
    logging.info(f"Using protocol: {args.protocol} (0x{protocol.value:X})")

    try:
        with serial.Serial(port=args.com_port) as ser:
            logging.info(f"Opened serial port: {ser.name}")
            read_and_activate(ser, protocol)
    except serial.SerialException as e:
        logging.error(f"Failed to open serial port: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
