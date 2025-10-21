// Form validation and success message
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Simple validation
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

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.hidden = true;
    }, 3000);
  }
});

// Hamburger menu functionality (hidden — but included if needed later)
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
