// Selecting the contact form
let form = document.getElementById("contactForm");
//adding submit event
form.addEventListener("submit", function(event) {
    // Getting values from input fields

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();


    // Checking whether fields are empty

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

    }

    else {

        alert("Thank you " + name + "! Your message has been submitted.");

        // Clearing the form

        form.reset();

    }

});
