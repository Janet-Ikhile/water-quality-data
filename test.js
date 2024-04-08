document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('followUpForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Simple validation example
        const easeOfSubmission = document.getElementById('easeOfSubmission').value;
        if (easeOfSubmission < 1 || easeOfSubmission > 10) {
            alert('Please enter a value between 1 and 10.');
            return;
        }

        // Gather form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Placeholder for submission logic
        console.log('Form data:', data);

        window.location.href = 'thank-you.html'; //redirect the user to the thank you page

    });
});
