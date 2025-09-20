# Contact Us Webpage with EmailJS Integration

This is a simple and interactive **Contact Us** webpage that allows visitors to send messages directly to the site admin’s Gmail account using **EmailJS**. The page is built using **HTML, CSS, and JavaScript**.

---

## 🌐 Live Demo
*(Optional if you enable GitHub Pages)*  
You can view the live page here:  
[https://YourUsername.github.io/contact-us/](https://YourUsername.github.io/contact-us/)

---

## 📂 Project Structure

contact-us/
├── index.html # Main HTML file
├── style.css # CSS styles for the page
├── script.js # JavaScript for EmailJS integration
└── README.md # Project documentation

---

## 🛠 Features

- **Interactive Form:** Visitors can enter Name, Email, Subject, and Message.  
- **EmailJS Integration:** Sends form submissions directly to a Gmail account.  
- **Responsive Design:** Works on desktop and mobile devices.  
- **Selectable Subjects:** Predefined subject options (General Query, Support, Feedback, Collaboration).  
- **Live Status Messages:** Shows confirmation or error messages after submission.

---

## ⚙️ How to Use

1. **Clone the repository:**

```bash
git clone https://github.com/YourUsername/contact-us.git
cd contact-us
Setup EmailJS:


Setup EmailJS:

Sign up at EmailJS
.

Create a service (e.g., Gmail).

Create an email template with the following variables:
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
Copy your Service ID, Template ID, and Public Key.

Configure script.js:
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  })
  .then(function() {
    status.style.color = "green";
    status.innerHTML = "✅ Message sent successfully!";
  }, function(error) {
    status.style.color = "red";
    status.innerHTML = "❌ Failed to send. Check console.";
    console.log("EmailJS error:", error);
  });
});
Open index.html in a browser and test the form.

📌 Notes

Make sure the EmailJS template is set to HTML if you want formatted emails.

Check Spam/Junk folder if emails don’t appear in Gmail.

The form uses client-side JavaScript, so no backend server is required.

📧 Contact

For any questions or feedback, contact: your-email@example.com

Made  by Shilpi Kumari

