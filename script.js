`js
// Select the time element using its data-testid
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Display the current time in milliseconds
timeElement.textContent = Date.now();
.
