document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("submitForm");

    // Adding event listener for form submission
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Preventing default form submission

        // Function to validate the form
        function validateForm() {
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();

            if (nameValue === "" || emailValue === "") {
                alert("Please fill in all required fields.");
                return false; // Preventing form submission
            }

            return true; // Allow form submission
        }

        if (validateForm()) {
            // Validation of form passed, Show successful message
            alert("Form submitted successfully!");
            submitForm.reset(); 
        }
    });
});