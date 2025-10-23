document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      const successMsg = document.getElementById("test-contact-success");

      let valid = true;

      // Reset all errors
      document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

      if (!name.value.trim()) {
        document.getElementById("test-contact-error-name").textContent = "Full name is required.";
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value)) {
        document.getElementById("test-contact-error-email").textContent = "Enter a valid email address.";
        valid = false;
      }

      if (!subject.value.trim()) {
        document.getElementById("test-contact-error-subject").textContent = "Subject is required.";
        valid = false;
      }

      if (message.value.trim().length < 10) {
        document.getElementById("test-contact-error-message").textContent = "Message must be at least 10 characters.";
        valid = false;
      }

      if (valid) {
        successMsg.style.display = "block";
        contactForm.reset();
      } else {
        successMsg.style.display = "none";
      }
    });
  }
});
