const navbar = document.querySelector(".navbar");

const image = document.querySelector("header .image");

const tombMenu = document.querySelector(".tombMenu");
tombMenu.addEventListener("click", () => {
    image.classList.toggle("image2");
})

// navbar sticky
window.addEventListener('scroll', () => {
    navbar.classList.toggle("sticky", scrollY > 30);
})

// bagian persyaratan

// button
const buttonMuslim = document.querySelector("main .santri-muslim");
const muslim = document.querySelector("main .muslim");
buttonMuslim.addEventListener("click", () => {
    muslim.style.display = "block";
    muslimah.style.display = "none";
    buttonMuslim.classList.add("active");
    buttonMuslimah.classList.remove("active");
})

const buttonMuslimah = document.querySelector("main .santri-muslimah");
const muslimah = document.querySelector("main .muslimah");
muslimah.style.display = "none";
buttonMuslimah.addEventListener("click", () => {
    muslim.style.display = "none";
    muslimah.style.display = "block";
    buttonMuslim.classList.remove("active");
    buttonMuslimah.classList.add("active");
})