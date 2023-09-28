document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorParagraph = document.getElementById("error");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get email by user
        const email = emailInput.value;

        // validating the email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Check if email format is valid
        if (emailRegex.test(email)) {
            // Email is valid
            errorParagraph.textContent = ""; // Remove previous error message
            emailForm.submit(); // Allow the form submission
        } else {
            // Email is not valid
            errorParagraph.textContent = "Please enter a valid email address.";
        }
    });
});