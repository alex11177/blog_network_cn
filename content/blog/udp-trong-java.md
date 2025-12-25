
---
title: "Lập trình UDP trong Java: Tốc độ trên hết (Fire and Forget)"
date: 2025-12-23
tags: ["Java", "UDP", "Network"]
image: "/images/posts/java-udp.png"
categories: ["Java", "Networking"]
draft: false
summary: "Khác với TCP, UDP là giao thức 'gửi rồi quên'. Tại sao lại dùng một giao thức không tin cậy? Cùng tìm hiểu cách implement UDP Client/Server trong Java."
---

## UDP là gì? (User Datagram Protocol)

UDP là giao thức **không kết nối (connectionless)**. Nó không quan tâm người nhận có sẵn sàng không, cũng không check xem gói tin có đến nơi hay không.
- **Ưu điểm:** Tốc độ cực nhanh, overhead (chi phí header) thấp.
- **Nhược điểm:** Có thể mất gói tin, sai thứ tự.

**Khi nào dùng UDP?** 
- Video Streaming (Zoom, YouTube Live). Mất vài frame hình thì video chỉ hơi nháy, chứ không nên dừng lại để chờ tải lại.
- Game FPS (CS:GO, Valorant). Vị trí địch cần cập nhật tức thời.
- DNS Lookup.

## Code ví dụ UDP trong Java

Trong UDP, chúng ta không dùng `Socket` mà dùng `DatagramSocket` và đóng gói dữ liệu vào `DatagramPacket`.

### UDP Server (Receiver)

```java
import java.net.*;

public class UdpServer {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket(9876);
        byte[] receiveData = new byte[1024];

        System.out.println("UDP Server đang chờ...");

        while (true) {
            // Tạo packet rỗng để hứng dữ liệu
            DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
            
            // Chặn chờ nhận tin
            socket.receive(receivePacket);

            String message = new String(receivePacket.getData(), 0, receivePacket.getLength());
            System.out.println("Đã nhận: " + message);
        }
    }
}
```

### UDP Client (Sender)

```java
import java.net.*;

public class UdpClient {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket();
        
        String message = "Hello UDP World!";
        byte[] sendData = message.getBytes();
        
        InetAddress ipAddress = InetAddress.getByName("localhost");
        
        // Đóng gói dữ liệu kèm địa chỉ đích
        DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, ipAddress, 9876);
        
        // Bắn đi (Fire)
        socket.send(sendPacket);
        System.out.println("Đã gửi tin!");
        
        socket.close();
    }
}
```

## Sự khác biệt cốt lõi với TCP code
1.  **Không có `accept()`**: Server không cần bắt tay. Nó chỉ mở cổng và hứng mọi thứ bay vào.
2.  **Packet-based**: Dữ liệu phải được đóng gói thành từng `DatagramPacket` rời rạc, không phải là một dòng chảy (Stream) liên tục như TCP.
3.  **Kích thước**: Một gói UDP an toàn thường < 64KB (thực tế tốt nhất là dưới MTU ~1400 bytes) để tránh bị phân mảnh (fragmentation).
