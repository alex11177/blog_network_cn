---
title: "Profile"
date: 2025-12-23
hidden: true
---

<div class="profile-container">

<div class="profile-header">
  <div class="profile-avatar">
    <img src="/blog_network_cn/images/avatar.jpg?v=2" alt="Vương Trung Phiên" class="avatar-img">
  </div>
  <div class="profile-intro">
    <h1 class="profile-name">
      Vương Trung Phiên
    </h1>
    <p class="profile-title">Backend Developer & Network Programming</p>
  </div>
</div>


<div class="profile-section">
  <h2 class="section-heading">📚 Thông tin</h2>
  <div class="info-grid">
    <div class="info-item">
      <span class="info-label">Ngành</span>
      <span class="info-value">Công nghệ thông tin</span>
    </div>
    <div class="info-item">
      <span class="info-label">Trường</span>
      <span class="info-value">Đại Học Công Nghệ</span>
    </div>
    <div class="info-item">
      <span class="info-label">Email</span>
      <span class="info-value">nq2019.vuongtrungphien220804@gmail.com</span>
    </div>
    <div class="info-item">
      <span class="info-label">Điện thoại</span>
      <span class="info-value">0907955098</span>
    </div>
  </div>
</div>

<div class="profile-section">
  <h2 class="section-heading">💻 Kỹ năng</h2>
  <div class="skills-container">
    <span class="skill-badge">Java</span>
    <span class="skill-badge">JavaScript</span>
    <span class="skill-badge">Mạng máy tính</span>
    <span class="skill-badge">Backend Development</span>
  </div>
</div>

<div class="profile-section">
  <h2 class="section-heading">📜 Chứng chỉ</h2>
  <div class="certificates-list">
    <div class="cert-item">
      <a href="/blog_network_cn/files/certificates/JavaScriptEssentials2Update20251223-31-lhy0wq.pdf" target="_blank" class="cert-link">
        <span class="cert-icon">📄</span>
        <span class="cert-name">JavaScript Essentials 2 (Update 2025)</span>
      </a>
    </div>
    <div class="cert-item">
      <a href="/blog_network_cn/files/certificates/JavaScriptEssentials1Update20251223-33-y9bk3c.pdf" target="_blank" class="cert-link">
        <span class="cert-icon">📄</span>
        <span class="cert-name">JavaScript Essentials 1 (Update 2025)</span>
      </a>
    </div>
    <div class="cert-item">
      <a href="/blog_network_cn/files/certificates/NetworkingBasicsUpdate20251223-31-frorrv.pdf" target="_blank" class="cert-link">
        <span class="cert-icon">📄</span>
        <span class="cert-name">Networking Basics (Update 2025)</span>
      </a>
    </div>
  </div>
</div>

<div class="profile-section">
  <h2 class="section-heading">📄 CV</h2>
  <div class="certificates-list">
    <div class="cert-item">
      <a href="/blog_network_cn/images/cv-photo.jpg" target="_blank" class="cert-link" data-cv-preview="true" aria-controls="cv-preview-modal">
        <span class="cert-icon">📄</span>
        <span class="cert-name">Tải CV (Hình ảnh / PDF)</span>
      </a>
    </div>
  </div>

  <h2 class="section-heading">🎯 Định hướng</h2>
  <p class="career-goal">
    <strong>Mục tiêu ngắn hạn (1-2 năm):</strong> Tập trung làm chủ các công nghệ Backend cốt lõi (Java Spring Boot, Microservices) và hiểu sâu về hệ thống phân tán.<br><br>
    <strong>Mục tiêu dài hạn:</strong> Trở thành một <em>Software Architect</em> chuyên về thiết kế các hệ thống Cloud-Native quy mô lớn, hiệu năng cao và bảo mật.<br><br>
    <strong>Đam mê:</strong> Tôi thích đào sâu vào các giao thức mạng (TCP/UDP), tối ưu hóa Database và xây dựng các giải pháp phần mềm "sạch" (Clean Architecture).
  </p>
</div>

</div>

<div id="cv-preview-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black bg-opacity-70 p-4" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="flex flex-col w-full max-w-6xl bg-gray-900 rounded-lg shadow-lg" style="height: 90vh;">
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-700">
      <h2 class="text-white text-sm font-semibold">CV Preview</h2>
      <div class="flex items-center gap-3">
        <button type="button" class="text-sm text-gray-300 hover:text-white" data-cv-zoom>Zoom 150%</button>
        <a class="text-sm text-gray-300 hover:text-white underline" href="/blog_network_cn/images/cv-photo.jpg" target="_blank" rel="noopener">Open Image</a>
        <button type="button" class="text-sm text-gray-300 hover:text-white" data-cv-close>Close</button>
      </div>
    </div>
    <div class="flex-1 bg-gray-900 p-4 overflow-auto">
      <img id="cv-preview-image" src="/blog_network_cn/images/cv-photo.jpg" class="block w-full h-auto" style="transform-origin: top left;" alt="CV preview">
    </div>
  </div>
</div>
<script id="cv-preview-script">
    (function () {
        const trigger = document.querySelector('[data-cv-preview="true"]');
        const modal = document.getElementById('cv-preview-modal');
        if (!trigger || !modal) {
            return;
        }

        const zoomButton = modal.querySelector('[data-cv-zoom]');
        const image = modal.querySelector('#cv-preview-image');
        let zoomed = false;

        const applyZoom = () => {
            if (!zoomButton || !image) {
                return;
            }
            if (zoomed) {
                image.style.width = '150%';
                image.style.maxWidth = 'none';
                zoomButton.textContent = 'Fit';
            } else {
                image.style.width = '100%';
                image.style.maxWidth = '100%';
                zoomButton.textContent = 'Zoom 150%';
            }
        };

        const openModal = (event) => {
            event.preventDefault();
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            zoomed = false;
            applyZoom();
        };

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        trigger.addEventListener('click', openModal);
        modal.querySelectorAll('[data-cv-close]').forEach((button) => {
            button.addEventListener('click', closeModal);
        });
        if (zoomButton) {
            zoomButton.addEventListener('click', () => {
                zoomed = !zoomed;
                applyZoom();
            });
        }
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    })();
</script>
