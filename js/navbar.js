const image = document.querySelector("header .image");

const tombMenu = document.querySelector(".tombMenu");
tombMenu.addEventListener("click", () => {
    image.classList.toggle("image2");
})


// bagian persyaratan

// button
const buttonMuslim = document.querySelector("main .santri-muslim");
const muslim = document.querySelector("main .muslim");
buttonMuslim.addEventListener("click", () => {
    muslim.style.display = "block";
    muslimah.style.display = "none";
})

const buttonMuslimah = document.querySelector("main .santri-muslimah");
const muslimah = document.querySelector("main .muslimah");
muslimah.style.display = "none";
buttonMuslimah.addEventListener("click", () => {
    muslim.style.display = "none";
    muslimah.style.display = "block";
})