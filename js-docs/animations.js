/* Sevices - Wave Loading Effect  */
/* Barbers and Scheduling - Wave Loading Effect */
/* Hours and Location - Wave Loading Effect */
const SERV_H2 = document.querySelectorAll("h2");
const BARBER_IMGS = document.querySelectorAll(".img");
const DIVIDE = document.querySelectorAll(".divide");

function animateElements(e, delay) {
    e.forEach((e, index) => {
        setTimeout(() => {
            e.classList.add("loaded");
        }, index * delay);
    });
}

function loadProducts() {
    animateElements(document.querySelectorAll("h2"), 100);
    animateElements(document.querySelectorAll(".img"), 70);
    animateElements(document.querySelectorAll(".divide"), 250);
}

document.addEventListener("DOMContentLoaded", loadProducts);

/* Animation on Scroll Effect */
const ANIMATED_ELEMENTS = document.querySelectorAll(".animate-on-scroll");

const OBSERVER_ANIMATION = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const ELEMENT = entry.target;

            if (ELEMENT.classList.contains("gallery-imgs") && ELEMENT.closest("#img-container")) {
                const GALLERY_CONTAINER = ELEMENT.closest("#img-container");
                const GALLERY_IMGS = GALLERY_CONTAINER.querySelectorAll(".gallery-imgs");
                GALLERY_IMGS.forEach((img, i) => {
                    img.style.transitionDelay = `${i * 0.1}s`;
                    img.classList.add("is-visible");
                });
                observer.unobserve(ELEMENT); 
            } else if (ELEMENT.classList.contains("card") && ELEMENT.closest("#card-container")) {
                const CARD_CONTAINER = ELEMENT.closest("#card-container");
                const CARDS = CARD_CONTAINER.querySelectorAll(".card");
                CARDS.forEach((card, i) => {
                    card.style.transitionDelay = `${i * 0.1}s`; 
                    card.classList.add("is-visible");
                });
                observer.unobserve(ELEMENT); 
            } else {
                ELEMENT.classList.add("is-visible");
                observer.unobserve(ELEMENT);
            }
        }
    });
}, {
    threshold: 0.2 
});

ANIMATED_ELEMENTS.forEach((e) => OBSERVER_ANIMATION.observe(e));
