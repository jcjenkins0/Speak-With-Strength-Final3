document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseText = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from reloading page

    // Fake success simulation
    responseText.textContent = "Thank you for your message! We'll get back to you soon.";
    responseText.style.color = "green";

    // Clear form fields
    form.reset();
  });
});
