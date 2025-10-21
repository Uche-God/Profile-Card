// ================================
// 📬 Contact Form Validation (Contact Page Only)
// ================================
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    document.querySelectorAll('.error').forEach(err => err.textContent = '');

    if (!name) {
      document.getElementById('error-name').textContent = 'Full name is required.';
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('error-email').textContent = 'Enter a valid email.';
      valid = false;
    }
    if (!subject) {
      document.getElementById('error-subject').textContent = 'Subject is required.';
      valid = false;
    }
    if (!message) {
      document.getElementById('error-message').textContent = 'Message is required.';
      valid = false;
    }

    if (valid) {
      successMessage.hidden = false;
      form.reset();
      setTimeout(() => successMessage.hidden = true, 3000);
    }
  });
}

// ================================
// 🍔 Hamburger Menu Toggle (Works on All Pages)
// ================================
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ================================
// 🧑 About Page Feature (Optional)
// ================================
// Example: Maybe later you add an animation or skill progress bar on the About page
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
  console.log('About page loaded successfully!');
}
