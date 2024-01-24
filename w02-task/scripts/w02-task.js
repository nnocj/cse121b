/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Nicholas Oblitey Commey";
const currentYear = new Date().getFullYear(); // "2024"
const profilePicture = "images/myprofile.jpg";

/* Step 3 - Element Variables */

const nameElement = document.querySelector('#name');
const foodElement = document.querySelector('.block');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement,textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picuture of ${fullName}.`);


/* Step 5 - Array */
let favfoods = ["Beans", "Rice", "Waakye"];

foodElement.innerHTML = favfoods;
let newfood = 'Plantain';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;