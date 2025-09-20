# Contact Us Webpage with EmailJS Integration

This is a simple and interactive **Contact Us** webpage that allows visitors to send messages directly to the site admin’s Gmail account using **EmailJS**. The page is built using **HTML, CSS, and JavaScript**.

---

## 🌐 Live Demo  
You can view the live page here:  
[ https://shilpikumari26.github.io/Get_In_Touch//]( https://shilpikumari26.github.io/Get_In_Touch/)

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


---

## 🛠 Features

- Interactive form for Name, Email, Subject, and Message.
- Selectable Subjects: General Query, Support, Feedback, Collaboration.
- Sends secure emails using EmailJS, directly from the browser.
- Works seamlessly on mobile and desktop devices.
- Shows live status messages after submission.
- No backend server required.

---

## ⚙️ Setup and Usage

1. **Clone the repository**
    ```
    git clone https://github.com/YourUsername/contact-us.git
    cd contact-us
    ```
2. **Set up EmailJS**
    - Sign up at [EmailJS](https://www.emailjs.com/)
    - Create an email service (like Gmail)
    - Set up an email template with these variables:
      - `{{from_name}}`
      - `{{from_email}}`
      - `{{subject}}`
      - `{{message}}`
    - Copy your Service ID, Template ID, and Public Key from the EmailJS dashboard.

3. **Configure script.js**
    - Open `script.js` and insert your credentials:
      ```
      emailjs.init("YOUR_PUBLIC_KEY");
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: ...,
        from_email: ...,
        subject: ...,
        message: ...
      });
      ```
4. **Test the form**
    - Open `index.html` in your browser, fill in the form, and click Send Message.

---

## 📌 Notes

- Ensure your EmailJS template matches the variable names used in the code.
- Set your template as "HTML" in EmailJS for formatted emails.
- Check your Spam folder for missing messages.
- No backend is needed; everything is handled through client-side JavaScript.

---

## 📧 Contact

Questions or feedback? Email: [shilpi2612kumari@gmail.com](mailto:shilpi2612kumari@gmail.com)

Made by Shilpi Kumari

---
