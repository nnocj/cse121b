//Obtain user information and store information users contact into an API

const form = document.querySelector('form');
const username = form.querySelector("#username").value;
const email = form.querySelector("#email").value;
const radioButtons = form.querySelectorAll('input[type="radio"][name="contact-reason"]');
const messageTextarea = form.querySelector('#message').value;
const newsletterCheckbox = form.querySelector('#subscribe-newsletter').checked;

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const interestCustomers = []; // Initialize an empty array to hold customer info

    // Get the value of the selected radio button
    let selectedReason = '';
    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedReason = radioButton.value;
        }
    })});

    // Check if the newsletter checkbox is checked
    const receiveNewsletter = newsletterCheckbox ? "Yes" : "No";

    // Construct user contact info object
    const userContactInfo = {
        "Full name": username,
        "Email": email,
        "Contact-Reason": selectedReason,
        "Message": messageTextarea,
        "Receive Messages?": receiveNewsletter
    };

    // the user contact info object is pushed here into the array, latter i will decide what to do with it.
    interestCustomers.push(userContactInfo);

    
