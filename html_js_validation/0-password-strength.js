document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Disallow form submission

        // Getting password entered by the user

        const password = passwordInput.value;

        // Expression to check the criteria
        const minLengthRegex = /^.{8,}$/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        // Checking if the password meets all the criterias

        if (
            minLengthRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        ) {
            // password meets all criteria
            errorParagraph.textContent = ""; // Remove all previous error message
            passwordForm.submit(); // Allow form to submit
        } else {
            // Criteria does not meet password
            errorParagraph.textContent = 
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";

        }
    });
});