document.addEventListener("DOMContentLoaded", function() {
  // Toggle Navigation Menu
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });
  }

  // Contact Form Validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("contact-name");
      const email = document.getElementById("contact-email");
      const subject = document.getElementById("contact-subject");
      const message = document.getElementById("contact-message");
      const successMsg = document.getElementById("contact-success");

      let isValid = true;

      // Helper to show error
      const showError = (id, msg) => {
        const el = document.getElementById(id);
        if (el) el.textContent = msg;
      };

      // Clear previous errors
      document.querySelectorAll(".error").forEach(el => el.textContent = "");

      // Validation
      if (!name.value.trim()) {
        showError("test-contact-error-name", "Full name is required.");
        isValid = false;
      }
      if (!email.value.trim()) {
        showError("test-contact-error-email", "Email is required.");
        isValid = false;
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        showError("test-contact-error-email", "Enter a valid email address.");
        isValid = false;
      }
      if (!subject.value.trim()) {
        showError("test-contact-error-subject", "Subject is required.");
        isValid = false;
      }
      if (!message.value.trim()) {
        showError("test-contact-error-message", "Message is required.");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError("test-contact-error-message", "Message must be at least 10 characters.");
        isValid = false;
      }

      if (isValid) {
        successMsg.textContent = "Your message has been sent successfully!";
        form.reset();
      } else {
        successMsg.textContent = "";
      }
    });
  }
});
