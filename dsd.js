document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formResponse").innerText = "Thank you for your message! We will get back to you shortly.";
    document.getElementById("contactForm").reset();
});
