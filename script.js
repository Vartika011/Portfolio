// ===== SweetAlert2 Popup Integration for Contact Form =====

// Select form
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // SweetAlert2 popup
  Swal.fire({
    title: "🎉 Thank You!",
    text: "Thank you for your response 💌",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#00d4ff",
    background: "#1a1a2e",
    color: "#eee",
    showClass: {
      popup: "animate__animated animate__zoomIn"
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut"
    }
  });

  // Reset form after popup
  form.reset();
});

// ===== Animate sections on page load =====
const sections = document.querySelectorAll('.section');
window.addEventListener('load', () => {
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('visible');
    }, index * 300);
  });
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Hero section click animation =====
const hero = document.querySelector('#hero');
hero.addEventListener('click', () => {
  hero.classList.add('active');
  setTimeout(() => {
    hero.classList.remove('active');
  }, 300);
});
