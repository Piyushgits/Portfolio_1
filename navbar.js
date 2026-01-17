/* Select the toggler and add click listener (image_2728fe.png) */
let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", makeAcross);

function makeAcross() {
    navToggler.classList.toggle("active");
    
    /* Logic to expand/collapse the menu (image_27abbf.png) */
    let nav = document.querySelector(".nav");
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    } else {
        nav.removeAttribute("style");
    }
}