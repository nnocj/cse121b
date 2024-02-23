/* Project  */

/* Step 1: Declare and initialize global variables */
const postElement = document.querySelector(".adventurePost");
let templeList = [];

/* Step 2: async displayPosts Function */
const displayPosts = async (posts) => {
    posts.forEach(post => {
        const figure = document.createElement("figure");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        
        const img = document.createElement("img");
        img.src = post.image;
        img.alt = post.title;
        
        figure.appendChild(img);
       
        
        postsElement.appendChild(figure);
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