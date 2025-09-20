// Initialize EmailJS with your public key
(function() {
  emailjs.init("Aoo3AXN5KBq4sggN2"); // Replace with YOUR EmailJS Public Key
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  const status = document.getElementById("status");

  // Send email using EmailJS
  emailjs.send("service_n0fsjbd", "template_esez42d", { // Replace with YOUR Service ID and Template ID
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  })
  .then(function() {
    // Success message
    status.style.color = "green";
    status.innerHTML = "✅ Message sent successfully!";
    document.getElementById("contact-form").reset();
  }, function(error) {
    // Error message
    status.style.color = "red";
    status.innerHTML = "❌ Failed to send. Try again.";
    console.error("EmailJS error:", error);
  });
});


