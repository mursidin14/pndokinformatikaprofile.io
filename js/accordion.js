const accordionBody = document.querySelectorAll(".accordion-body");
accordionBody.forEach(body => {
    body.addEventListener("click", event => {
        body.classList.toggle("active");
    })
})