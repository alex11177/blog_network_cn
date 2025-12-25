
---
title: "DOM Manipulation: Làm chủ giao diện Web với JavaScript thuần (Vanilla JS)"
date: 2025-12-23
tags: ["JavaScript", "DOM", "Frontend"]
image: "images/posts/dom-manipulation.jpg"
categories: ["JavaScript"]
draft: false
summary: "Trước khi dùng React hay Vue, bạn phải hiểu DOM. Bài viết này hướng dẫn cách thao tác phần tử HTML, lắng nghe sự kiện và tối ưu hiệu suất render mà không cần jQuery."
---

## 1. DOM là gì? (Document Object Model)

Khi trình duyệt tải một trang web, nó chuyển đổi HTML thành một cấu trúc cây gọi là **DOM**. 
JavaScript không hiểu HTML, nó hiểu DOM. DOM chính là API cầu nối để JS có thể:
- Thay đổi nội dung trang web.
- Thay đổi cấu trúc và style.
- Phản hồi lại hành động người dùng.

## 2. Truy vấn phần tử (Selecting Elements)

Quên `document.getElementById` hay `getElementsByClassName` đi. Trong JS hiện đại, 99% trường hợp bạn chỉ cần 2 hàm này:

1.  **`document.querySelector(selector)`**: Trả về phần tử đầu tiên tìm thấy.
2.  **`document.querySelectorAll(selector)`**: Trả về một **NodeList** chứa tất cả phần tử tìm thấy.

**Ví dụ:**
```javascript
const mainTitle = document.querySelector('#main-title'); // ID
const buttons = document.querySelectorAll('.btn-primary'); // Class
const listItems = document.querySelectorAll('ul > li'); // CSS Selector phức tạp
```

> **Lưu ý:** `querySelectorAll` trả về NodeList, không phải Array. Để dùng `map`, `filter`, hãy convert nó: `Array.from(buttons)`.

## 3. Thao tác nội dung và Style

### Sửa nội dung
- `textContent`: An toàn, nhanh (khuyên dùng).
- `innerHTML`: Mạnh nhưng nguy hiểm (dễ dính lỗi XSS nếu render user input).

```javascript
const box = document.querySelector('.box');
box.textContent = 'Hello World'; 
```

### Sửa Style
Đừng sửa từng dòng style bằng JS (`element.style.color = 'red'`). Hãy thêm/bớt **Class** để tận dụng CSS.

```javascript
// Bad practice
box.style.backgroundColor = 'red';
box.style.padding = '20px';

// Good practice
box.classList.add('active'); // CSS: .active { background: red; padding: 20px; }
box.classList.toggle('hidden');
```

## 4. Xử lý sự kiện (Event Handling)

Sử dụng `addEventListener` là chuẩn mực vàng.

```javascript
const btn = document.querySelector('#submit-btn');

btn.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn form reload
    console.log('Button clicked!', event.target);
});
```

### Kỹ thuật Event Delegation (Nâng cao)

Giả sử bạn có 1 danh sách `<ul>` với 1000 thẻ `<li>`. Đừng gán 1000 event listener cho từng thẻ `<li>`. Hãy gán 1 cái cho thẻ cha `<ul>`.

```javascript
document.querySelector('#my-list').addEventListener('click', (e) => {
    // Kiểm tra xem user có click vào thẻ li không
    if (e.target.matches('li')) {
        console.log('Clicked text:', e.target.textContent);
    }
});
```
**Lợi ích:** Tiết kiệm bộ nhớ cực lớn và code gọn hơn.

## 5. Tạo và thêm phần tử mới

Cách tạo DOM element "sạch" và an toàn:

```javascript
// 1. Tạo phần tử
const newDiv = document.createElement('div');

// 2. Gán thuộc tính
newDiv.className = 'notification';
newDiv.textContent = 'Lưu thành công!';

// 3. Gắn vào DOM
document.body.appendChild(newDiv);
```

## Kết luận

Frameworks như React sinh ra để bạn đỡ khổ sở với DOM API. Tuy nhiên, hiểu rõ DOM giúp bạn:
1.  Debug tốt hơn khi Framework gặp lỗi.
2.  Tối ưu hiệu năng khi biết cái gì đang xảy ra dưới nắp capo.
3.  Viết các thư viện nhỏ hoặc landing page nhẹ mà không cần bundle React 200KB.
