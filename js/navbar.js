const image = document.querySelector("header .image");

const tombMenu = document.querySelector(".tombMenu");
tombMenu.addEventListener("click", () => {
    image.classList.toggle("image2");
})