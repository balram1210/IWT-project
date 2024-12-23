// Simple form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Message sent successfully! \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // You can integrate an actual email API for message delivery
    } else {
        alert("Please fill in all fields.");
    }
});
