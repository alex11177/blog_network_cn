
---
title: "Java Socket Programming: Xây dựng Chat Server đơn giản với TCP"
cover:
  image: "images/posts/java-socket.png"
date: 2025-12-23
tags: ["Java", "Socket", "TCP", "Backend"]
categories: ["Java", "Networking"]
draft: false
summary: "Đi sâu vào lập trình mạng tầng thấp với Java Socket. Hướng dẫn từng bước xây dựng mô hình Client-Server giao tiếp hay chiều qua giao thức TCP tin cậy."
---

## TCP Socket là gì?

**TCP (Transmission Control Protocol)** là giao thức hướng kết nối (connection-oriented). Trước khi truyền dữ liệu, nó bắt buộc phải thiết lập đường truyền (3-way handshake). Điều này đảm bảo:
- Dữ liệu đến nơi **đủ và đúng thứ tự**.
- Không bị mất gói tin.

Trong Java, chúng ta dùng gói `java.net`.

## Xây dựng Server (Echo Server)

Server sẽ lắng nghe ở một cổng (port), nhận tin nhắn từ Client và gửi phản hồi lại.

```java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        int port = 8080;
        
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server đang chạy tại port " + port + "...");

            while (true) {
                // 1. Chấp nhận kết nối
                Socket socket = serverSocket.accept();
                System.out.println("Client mới đã kết nối!");

                // 2. Tạo luồng Input/Output
                InputStream input = socket.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(input));
                
                OutputStream output = socket.getOutputStream();
                PrintWriter writer = new PrintWriter(output, true);

                // 3. Đọc và phản hồi
                String message = reader.readLine();
                System.out.println("Nhận được: " + message);
                writer.println("Server xác nhận: " + message);
                
                socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Xây dựng Client

Client kết nối đến IP và Port của Server để gửi tin.

```java
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 8080;

        try (Socket socket = new Socket(hostname, port)) {
            // Gửi tin nhắn
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
            writer.println("Hello from Java Client!");

            // Đọc phản hồi
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String response = reader.readLine();
            System.out.println(response);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Giải thích luồng đi (Workflow)

1.  **ServerSocket**: Mở cổng 8080 chờ đợi.
2.  **accept()**: Server chặn (block) chương trình lại cho đến khi có ai đó kết nối.
3.  **Client connect**: Gửi yêu cầu bắt tay.
4.  **IO Stream**: Sau khi kết nối thành công, `socket` hoạt động như một "ống nước". Bạn đổ dữ liệu vào đầu này (OutputStream), đầu kia hứng (InputStream).

## Ứng dụng thực tế
Dù ngày nay chúng ta dùng HTTP (Spring Boot), nhưng **Socket** vẫn là nền tảng của:
- Trò chơi trực tuyến (Real-time Gaming).
- Ứng dụng chat.
- Database Driver (kết nối tới MySQL/Redis).
