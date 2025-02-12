/* Sevices - Wave Loading Effect  */
/* Barbers and Scheduling - Wave Loading Effect */
/* Hours and Location - Wave Loading Effect */
const SERV_H2 = document.querySelectorAll("h2");
const BARBER_IMGS = document.querySelectorAll(".img");
const DIVIDE = document.querySelectorAll(".divide");

function animateElements(elements, delay) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("loaded");
        }, index * delay);
    });
}

function loadProducts() {
    animateElements(document.querySelectorAll("h2"), 100);
    animateElements(document.querySelectorAll(".img"), 70);
    animateElements(document.querySelectorAll(".divide"), 250);
}

document.addEventListener("DOMContentLoaded", loadProducts);