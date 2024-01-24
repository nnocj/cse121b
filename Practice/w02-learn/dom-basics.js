/* w2-Activity
Author: Nichoals Oblitey Commey
Purpose: Apply DOM-basics 
Date 01/23/2024 */


const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);


//Add an image the HTML file
const profilePic = document.createElement('img');
profilePic.setAttribute('src', 'https://nnocj1.github.io/wdd130/images/profile.jpg');
profilePic.setAttribute('alt', 'My profile Picture');

//display the profilePic
document.body.appendChild(profilePic);

//creating a new section element
const newSection = document.createElement('section');
newSection.innerHTML = '<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>';
document.body.appendChild(newSection);

