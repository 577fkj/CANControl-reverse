import socket

udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp_socket.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)

def scan_ip():
    message = "CAN-Control:192.168.{}.255"
    for i in range(256):
        broadcast_ip = f"192.168.{i}.255"
        udp_socket.sendto(message.format(i).encode(), (broadcast_ip, 1988))

    # 等待服务端的回复
    udp_socket.settimeout(5)  # 设置超时时间为5秒

    try:
        # 接收来自服务端的回复
        response, server_address = udp_socket.recvfrom(1024)
        print(f"Received reply from {server_address}: {response.decode()}")
    except socket.timeout:
        print("No response from server within timeout period.")

    udp_socket.close()


# 调用发送广播的函数
scan_ip()
