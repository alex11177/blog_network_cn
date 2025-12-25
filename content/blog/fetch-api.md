---
title: "Fetch API: Cuộc cách mạng Ajax trong JavaScript hiện đại"
image: "images/posts/fetch-api.jpg"
date: 2025-12-23
tags: ["JavaScript", "Fetch", "API", "Frontend"]
categories: ["JavaScript"]
draft: false
summary: "Quên XMLHttpRequest đi. Fetch API là tiêu chuẩn mới để gọi API tỏng trình duyệt, kết hợp hoàn hảo với Promise và Async/Await. Hướng dẫn toàn tập từ GET, POST đến xử lý lỗi."
---

## 1. Tại sao Fetch ra đời?

Ngày xưa, để gọi API (Ajax), chúng ta phải dùng `XMLHttpRequest`. Cú pháp của nó rất dài dòng, rắc rối và dựa trên callback (dễ dẫn đến Callback Hell).

**Fetch API** ra đời như một sự thay thế hiện đại:
- Dựa trên **Promise**.
- Cú pháp gọn gàng, giống tiếng Anh.
- Tích hợp sẵn trong mọi trình duyệt hiện đại (Chrome, Firefox, Safari...).

## 2. Cú pháp cơ bản (GET Request)

```javascript
fetch('https://api.example.com/users')
  .then(response => {
    // Fetch không reject khi lỗi HTTP (404, 500)
    // Bạn phải tự check thủ công
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Chuyển đổi body sang JSON
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```

## 3. Dùng với Async/Await (Khuyên dùng)

Code sẽ trông "đồng bộ" và dễ đọc hơn rất nhiều.

```javascript
async function getUser(id) {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json();
        return user;
    } catch (e) {
        console.log("Lỗi gọi API: " + e.message);
    }
}
```

## 4. Gửi dữ liệu (POST Request)

Khi gửi dữ liệu (ví dụ Login), bạn cần thêm tham số thứ 2 là `options`.

```javascript
const loginData = { username: "vtp", password: "123" };

const response = await fetch('https://api.example.com/login', {
    method: 'POST', // Phương thức
    headers: {
        'Content-Type': 'application/json' // Báo cho server biết mình gửi JSON
    },
    body: JSON.stringify(loginData) // Convert object JS sang chuỗi JSON
});
```

## 5. Fetch vs Axios

Nhiều người hỏi: *"Tại sao dùng thư viện Axios khi đã có Fetch?"*

| Đặc điểm | Fetch API | Axios |
| :--- | :--- | :--- |
| **Cài đặt** | Có sẵn (Native) | Phải cài (`npm install axios`) |
| **JSON parsing** | Phải gọi `.json()` | Tự động convert |
| **Error Handling** | Chỉ reject khi mất mạng | Reject khi HTTP 4xx/5xx |
| **Timeout** | Cần dùng `AbortController` | Có sẵn option `timeout` |

> **Lời khuyên:** Với các dự án nhỏ hoặc vừa, **Fetch** là quá đủ. Với các dự án Enterprise cần Interceptors (để tự động chèn Token) hay quản lý timeout phức tạp, **Axios** vẫn tiện hơn.
