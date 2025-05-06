import socket

udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp_socket.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

socket_client = socket.socket()

def scan_ip(network):
    message = "CAN-Control:" + network
    broadcast_ip = network
    udp_socket.sendto(message.encode(), (broadcast_ip, 1988))
    udp_socket.settimeout(5)
    try:
        response, server_address = udp_socket.recvfrom(1024)
        print(f"Received reply from {server_address}: {response.decode()}")
        return response.decode()
    except socket.timeout:
        print("No response from server within timeout period.")
        return None
    finally:
        udp_socket.close()

device = scan_ip('172.16.0.255')
device = device.replace('\n', '')
device, ip = device.split(':')
print(device, ip)
socket_client.connect((ip, 1998))
print(socket_client.recv(1024).decode("UTF-8"))