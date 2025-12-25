# Hướng dẫn sử dụng thư mục Certificates

## 📁 Thư mục này dùng để lưu file PDF chứng chỉ

### Cách sử dụng:

1. **Copy file PDF vào đây:**
   ```
   static/files/certificates/
   ├── chung-chi-java.pdf
   ├── chung-chi-javascript.pdf
   └── chung-chi-mang.pdf
   ```

2. **Trong bài viết Markdown, link như sau:**
   ```markdown
   [Xem chứng chỉ Java](/files/certificates/chung-chi-java.pdf)
   
   [Tải chứng chỉ JavaScript](/files/certificates/chung-chi-javascript.pdf)
   ```

3. **Ví dụ thực tế trong bài viết:**
   ```markdown
   ---
   title: "Portfolio - Chứng chỉ của tôi"
   ---
   
   ## Chứng chỉ đã đạt được
   
   - [📜 Chứng chỉ Java Foundation](/files/certificates/chung-chi-java.pdf) (2024)
   - [📜 Chứng chỉ JavaScript ES6](/files/certificates/chung-chi-javascript.pdf) (2024)
   - [📜 Chứng chỉ Mạng máy tính](/files/certificates/chung-chi-mang.pdf) (2024)
   ```

### Ghi chú:
- ✅ File PDF sẽ tự động được Hugo phục vụ
- ✅ Đường dẫn bắt đầu từ `/files/...` (slash đầu quan trọng!)
- ✅ Tên file nên dùng chữ thường, không dấu, dùng dấu gạch ngang
- ✅ Hỗ trợ trực tiếp xem PDF trong browser hiện đại

### Ví dụ tốt:
- ✅ `chung-chi-java-foundation.pdf`
- ✅ `certificate-javascript-2024.pdf`

### Tránh:
- ❌ `Chứng chỉ Java.pdf` (có dấu, khoảng trắng)
- ❌ `cert_123.pdf` (không rõ nghĩa)
