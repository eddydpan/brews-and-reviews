document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".blog-post");
  
    // Animate blog posts all together
    setTimeout(() => {
      posts.forEach((post) => {
        post.classList.add("show");
      });
    }, 500); // Delay before animation begins
  });
  