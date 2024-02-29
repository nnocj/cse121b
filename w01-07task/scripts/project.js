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
            img.style.borderLeft = "1px solid white";
            img.style.borderRight = "1px solid white";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.borderLeft = "none"; // Remove border on mouseout
            img.style.borderRight = "none"; 
        });
        
        figure.appendChild(img);
       
        
        postElement.appendChild(figure);
    });
};

const fetchPosts = async () => {
    try {
      const response = await fetch('https://desk.getodeen.com/api/method/posts');
      const data = await response.json();
      const blogPosts = data.result.blog_posts;
      setPosts(blogPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  
  };


/* Step 3: async getPosts Function using fetch()*/
const getPosts = async () => {
    const response = await fetch("https://nnocj1.github.io/cse121b/w01-07task/project.json");
    postList = await response.json();

    const filterPosts = (numPosts = null) => {
        let filteredPosts = posts;
    
        filteredPosts.sort((a, b) => new Date(b.published_on) - new Date(a.published_on));
    
        if (numPosts) {
          filteredPosts = filteredPosts.slice(0, Math.min(numPosts, filteredPosts.length));
        }
        const latestPosts = filterPosts(null, 2); // Change the number to select the number of Latest post to display.
        displayPosts(latestPosts);

    displayPosts(postList);
};


// Call getTemples function to start the application
getPosts();