const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear old messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (name.value.trim() === "") {
    document.getElementById("error-name").textContent = "Full name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById("error-email").textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (subject.value.trim() === "") {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    form.reset();
    successMessage.hidden = false;
  } else {
    successMessage.hidden = true;
  }
});
