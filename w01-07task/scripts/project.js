/* Project */

/* Step 1: Declare and initialize global variables */
const postElement = document.querySelector(".adventurePost");
let postList = [];

/* Step 2: async displayPosts Function */
const displayPosts = async (posts) => {
    posts.forEach(post => {
        const figureHTML = `
            <figure>
                <img src="${post.image}" alt="${post.title}" style="cursor: pointer;">
                <figcaption>${post.title}</figcaption>
            </figure>`;

        postElement.innerHTML += figureHTML;
    });

    // Add event listeners for mouseover and mouseout after all posts are added
    addEventListeners();
};

/* Step 3: async getPosts Function using fetch()*/
const getPosts = async () => {
    try {
        const response = await fetch("https://nnocj1.github.io/cse121b/w01-07task/project.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        postList = await response.json();
        displayPosts(postList);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

/* Step 4: Function to add event listeners */
const addEventListeners = () => {
    const imgs = postElement.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s";
            img.style.borderLeft = "1px solid white";
            img.style.borderRight = "1px solid white";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.borderLeft = "none";
            img.style.borderRight = "none";
        });
    });
};

// Call getPosts function to start the application
getPosts();
