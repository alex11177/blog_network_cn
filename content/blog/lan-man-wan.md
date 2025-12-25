
---
title: "LAN, MAN, WAN: Phân loại mạng máy tính và Ứng dụng thực tế"
image: "/images/posts/lan-man-wan.jpeg"
date: 2025-12-23
tags: ["Mạng", "LAN", "WAN", "Network"]
categories: ["Networking"]
draft: false
summary: "Phân biệt LAN, MAN, WAN không chỉ là lý thuyết đi thi. Nó ảnh hưởng trực tiếp đến cách bạn thiết kế hệ thống phân tán và chọn hạ tầng server."
---

## 1. LAN (Local Area Network) - Mạng cục bộ

**Phạm vi:** Nhỏ hẹp (Trong một căn phòng, tòa nhà, hoặc văn phòng).
**Tốc độ:** Rất cao (1 Gbps - 100 Gbps).
**Độ trễ (Latency):** Cực thấp (< 1ms).
**Quản lý:** Do chính doanh nghiệp hoặc gia đình tự làm chủ.

**Ví dụ:**
- Wifi tại quán cafe.
- Mạng nội bộ kết nối các máy tính trong công ty để chia sẻ máy in.

> **Ứng dụng:** Khi bạn build một cụm server database cluster, bạn luôn muốn đặt chúng trong cùng một LAN để đồng bộ dữ liệu nhanh nhất có thể.

## 2. MAN (Metropolitan Area Network) - Mạng đô thị

**Phạm vi:** Trung bình (Một thành phố hoặc một khu vực lớn).
**Đặc điểm:** Kết nối nhiều mạng LAN lại với nhau. Thường sử dụng cáp quang tốc độ cao.

**Ví dụ:**
- Mạng truyền hình cáp của thành phố.
- Hạ tầng mạng kết nối các chi nhánh ngân hàng trong cùng một quận.

## 3. WAN (Wide Area Network) - Mạng diện rộng

**Phạm vi:** Rất lớn (Quốc gia, châu lục, toàn cầu).
**Tốc độ:** Thấp hơn LAN (do khoảng cách xa).
**Độ trễ:** Cao (Có thể từ 10ms đến 200ms).
**Quản lý:** Bởi các ISP (nhà cung cấp dịch vụ Internet) như Viettel, VNPT, FPT.

**Ví dụ điển hình nhất:** Internet.

> **Thách thức:** Khi triển khai ứng dụng toàn cầu, bạn phải đối mặt với độ trễ của WAN. Giải pháp là dùng **CDN (Content Delivery Network)** để mang dữ liệu đến gần người dùng hơn (biến truy cập WAN thành truy cập gần như LAN).

## Bảng so sánh nhanh

| Đặc điểm | LAN | WAN |
| :--- | :--- | :--- |
| **Khoảng cách** | Ngắn (VP, Nhà) | Dài (Quốc tế) |
| **Vật liệu truyền** | Cáp xoắn (RJ45), Wifi | Cáp quang biển, Vệ tinh |
| **Tốc độ** | Rất cao | Thấp hơn |
| **Lỗi đường truyền** | Ít xảy ra | Dễ xảy ra, nghẽn mạng |
| **Chi phí** | Rẻ, mua 1 lần | Cao, trả phí thuê bao |

## Kết luận
Là một Backend Developer, bạn thường không phải kéo dây mạng, nhưng bạn phải hiểu: **"Mạng không bao giờ tin cậy"**. Gửi request trong LAN (giữa các microservices) khác hoàn toàn việc gọi API qua WAN (public internet). Hiểu rõ điều này giúp bạn cấu hình timeout và retry hợp lý.
