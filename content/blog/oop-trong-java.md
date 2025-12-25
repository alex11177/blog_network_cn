---
title: "Lập trình hướng đối tượng (OOP) trong Java: 4 trụ cột và Best Practices"
image: "images/posts/oop-best-practices.webp"
date: 2025-12-23
tags: ["Java", "OOP", "Design Patterns"]
categories: ["Java", "Core"]
draft: false
summary: "OOP không chỉ là lý thuyết sgk. Bài viết này đi sâu vào 4 tính chất (Encapsulation, Inheritance, Polymorphism, Abstraction) kèm theo các quy tắc thiết kế (SOLID) thực tế trong dự án Java lớn."
---

## Mở đầu: Tại sao OOP lại quan trọng?

Object-Oriented Programming (OOP) là mô hình lập trình dựa trên khái niệm "Object" (đối tượng) chứa dữ liệu (attributes) và mã (methods). Java là ngôn ngữ OOP thuần túy (gần như), nên việc hiểu sâu OOP là điều kiện tiên quyết để viết code Java tốt (Clean Code).

## 1. Encapsulation (Tính đóng gói)

**Định nghĩa:** Giấu thông tin và chi tiết cài đặt nội bộ, chỉ cung cấp interface để tương tác bên ngoài.

**Tại sao cần?** Bảo vệ dữ liệu khỏi sự truy cập tùy tiện.

```java
public class BankAccount {
    private double balance; // Dữ liệu được giấu đi (private)

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount; // Chỉ thay đổi qua method kiểm soát
        }
    }

    public double getBalance() {
        return balance; // Getter an toàn
    }
}
```

> **Best Practice:** Luôn để thuộc tính là `private`. Chỉ dùng `public` cho hằng số (`public static final`).

## 2. Inheritance (Tính kế thừa)

**Định nghĩa:** Cho phép một class con (subclass) kế thừa các thuộc tính và phương thức của class cha (superclass).

**Cú pháp:** `extends`

```java
// Class cha
public class Vehicle {
    protected String brand = "Ford";
    public void honk() {
        System.out.println("Tuut, tuut!");
    }
}

// Class con
public class Car extends Vehicle {
    public String modelName = "Mustang";
}
```

> **Cảnh báo:** Hãy cẩn thận với kế thừa sâu (Deep Inheritance Hierarchy). Về sau, người ta ưa chuộng "Composition over Inheritance" (Sử dụng thành phần thay vì kế thừa) để giảm sự phụ thuộc chặt chẽ giữa các lớp.

## 3. Polymorphism (Tính đa hình)

**Định nghĩa:** Một hành động có thể được thực hiện theo nhiều cách khác nhau.

Có 2 loại đa hình:
1.  **Compile-time (Overloading):** Cùng tên hàm nhưng khác tham số.
2.  **Runtime (Overriding):** Class con định nghĩa lại method của class cha.

```java
public class Animal {
    public void animalSound() {
        System.out.println("The animal makes a sound");
    }
}

public class Pig extends Animal {
    @Override
    public void animalSound() { // Runtime Polymorphism
        System.out.println("The pig says: wee wee");
    }
}
```

## 4. Abstraction (Tính trừu tượng)

**Định nghĩa:** Ẩn các chi tiết cài đặt phức tạp và chỉ hiển thị các chức năng thiết yếu.

Trong Java, chúng ta dùng `abstract class` và `interface`.

### Interface vs Abstract Class (Phỏng vấn hay hỏi)
- **Interface:** Dùng để định nghĩa **hành vi** (Can-Do). Một class có thể implement nhiều interface. (Ví dụ: `Flyable`, `Runnable`).
- **Abstract Class:** Dùng để định nghĩa **bản chất** (Is-A). Một class chỉ có thể extends một abstract class. (Ví dụ: `Animal`, `Person`).

## Kết luận: Từ OOP đến SOLID

Hiểu 4 tính chất trên là chưa đủ. Để trở thành Senior, bạn cần áp dụng nguyên lý **SOLID**:
- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

Chúng ta sẽ bàn kỹ về SOLID trong một bài viết chuyên sâu khác. Nhưng hãy nhớ: Code Java tốt là code dễ đọc, dễ bảo trì và mở rộng được.
