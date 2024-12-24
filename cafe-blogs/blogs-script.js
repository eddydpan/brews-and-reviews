document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const textArea = document.querySelector(".text-area");
  
    // Image animation
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 500);
    });
  
    // Scroll listener for text-area
    window.addEventListener("scroll", () => {
      const textPosition = textArea.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (textPosition < screenHeight * 0.75) {
        textArea.classList.add("visible");
      }
    });
  });
  