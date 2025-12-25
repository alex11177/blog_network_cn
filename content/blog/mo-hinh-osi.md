
---
title: "Mô hình OSI: 7 tầng giao tiếp mạng mà mọi Developer cần biết"
cover:
  image: "images/posts/osi-model.jpg"
date: 2025-12-23
tags: ["Mạng", "OSI", "Network"]
categories: ["Networking"]
draft: false
summary: "Từ Physical đến Application, mô hình OSI là bản đồ giúp bạn hiểu cách Internet vận hành. Tại sao HTTP lại ở tầng 7 còn IP ở tầng 3? Cùng giải mã bí mật này."
---

## Mô hình OSI là gì?
**OSI** (Open Systems Interconnection) là mô hình tham chiếu lý thuyết mô tả cách các hệ thống máy tính giao tiếp với nhau qua mạng. Nó chia quy trình truyền tin phức tạp thành **7 tầng (layers)** riêng biệt, mỗi tầng giải quyết một nhiệm vụ cụ thể.

## Tầng 7 - 1: Từ Người dùng đến Dây cáp

Hãy tưởng tượng bạn gửi một bức thư (email):

### 7. Tầng Ứng Dụng (Application Layer)
Đây là nơi bạn tương tác trực tiếp. Chrome, Firefox, Postman hoạt động ở đây.
- **Protocol:** HTTP/HTTPS, SMTP (Email), FTP (File).
- **Nhiệm vụ:** Nhận dữ liệu từ user và chuyển xuống dưới.

### 6. Tầng Trình Bày (Presentation Layer)
Dữ liệu cần được "dịch" sang định dạng chung.
- **Nhiệm vụ:** Mã hóa (Encryption - SSL/TLS), nén dữ liệu và định dạng (JSON -> Binary).

### 5. Tầng Phiên (Session Layer)
Quản lý các cuộc hội thoại giữa hai máy.
- **Nhiệm vụ:** Thiết lập, duy trì và kết thúc kết nối (Session).

### 4. Tầng Giao Vận (Transport Layer) - Quan trọng!
Quyết định cách dữ liệu được vận chuyển.
- **Protocol:** **TCP** (tin cậy, chậm), **UDP** (nhanh, không đảm bảo).
- **Đơn vị dữ liệu:** Segments.
- **Ví dụ:** Khi bạn xem YouTube, có thể dùng UDP để load nhanh. Khi tải file, dùng TCP để không lỗi file.

### 3. Tầng Mạng (Network Layer)
Định tuyến đường đi (Routing).
- **Protocol:** **IP** (v4/v6).
- **Thiết bị:** Router.
- **Đơn vị dữ liệu:** Packets.
- **Nhiệm vụ:** Tìm đường đi ngắn nhất từ A đến B trên Internet.

### 2. Tầng Liên Kết Dữ Liệu (Data Link Layer)
Truyền tải tin cậy trong cùng một mạng LAN.
- **Địa chỉ:** **MAC Address**.
- **Thiết bị:** Switch.
- **Đơn vị dữ liệu:** Frames.

### 1. Tầng Vật Lý (Physical Layer)
Tất cả chỉ là tín hiệu điện (010101).
- **Thiết bị:** Cáp mạng (RJ45), Wifi sóng vô tuyến.
- **Đơn vị dữ liệu:** Bits.

## Tại sao Developer cần hiểu OSI?
Khi web của bạn bị sập, bạn check ở đâu?
1.  Ping server không được? -> Lỗi Tầng 3 (Network/IP) hoặc Tầng 1 (Đứt cáp).
2.  Kết nối TCP timeout? -> Lỗi Tầng 4 (Firewall chặn port).
3.  API trả về 500? -> Lỗi Tầng 7 (Code logic sai).

Hiểu OSI giúp bạn **troubleshoot** (gỡ lỗi) hệ thống một cách có tư duy logic thay vì đoán mò.
