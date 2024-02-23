/* Project  */

/* Step 1: Declare and initialize global variables */
const postElement = document.querySelector(".adventurePost");
let postList = [];

/* Step 2: async displayPosts Function */
const displayPosts = async (posts) => {
    posts.forEach(post => {
        const figure = document.createElement("figure");
        
        const h3 = document.createElement("h3");
        h3.textContent = post.title;
        
        const img = document.createElement("img");
        img.src = post.image;
        img.alt = post.title;

        // Add event listeners for mouseover and mouseout
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s";
            img.style.border = "3px solid white";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.border = "none"; // Remove border on mouseout
        });
        
        figure.appendChild(img);
       
        
        postElement.appendChild(figure);
    });
};

/* Step 3: async getPosts Function using fetch()*/
const getPosts = async () => {
    const response = await fetch("https://nnocj1.github.io/cse121b/w01-07task/project.json");
    postList = await response.json();
    displayPosts(postList);
};


// Call getTemples function to start the application
getPosts();