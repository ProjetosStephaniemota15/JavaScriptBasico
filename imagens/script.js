const mainImage = document.getElementById("main-image");

const bottomImages = document.querySelectorAll(".bottom-image");

bottomImages.forEach((image, index) => {
    
  image.addEventListener("click", () => {
    const currentImageSrc = mainImage.getAttribute("src");
    mainImage.setAttribute("src", image.getAttribute("src"));
    image.setAttribute("src", currentImageSrc);
  });
});