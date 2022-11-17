import Typed from '/node_modules/typed.js/src/typed.js';
// feature nav
const prev = document.querySelector("span.feature-nav-prev");
const next = document.querySelector("span.feature-nav-next");
const carousel = document.querySelector("div.feature-scroller");
const track = document.querySelector("ul.feature-nav");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", () => {
    width = carousel.offsetWidth;
});
next.addEventListener("click", (event) => {
    event.preventDefault();
    index += 1;
    prev.classList.add("show");
    track.style.transform = "translateX(" + index * -width + "px)";
    if (track.offsetWidth - index * width < index * width) {
        next.classList.add("hide");
    }
})

prev.addEventListener("click", (event) => {
    event.preventDefault();
    index -= 1;
    next.classList.remove("hide");
    if (index === 0) {
        prev.classList.remove("show")
    }
    track.style.transform = "translateX(" + index * -width + "px)";
})

// feature change image 
const featureLink = document.querySelector(".feature-nav li a.nav-link");
const featureImg = document.querySelector(".feature-content-item");
let currentImg = 1;
document.querySelector('a.nav-link[alt="1"]').addEventListener("click", (a) => {
    a.preventDefault();
    document.querySelector("div.feature-content-item[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector("a.nav-link[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector('div.feature-content-item[alt="1"]').classList.add("active");
    document.querySelector('a.nav-link[alt="1"]').classList.add("active");
    currentImg = 1;
})
document.querySelector('a.nav-link[alt="2"]').addEventListener("click", (a) => {
    a.preventDefault();
    document.querySelector("div.feature-content-item[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector("a.nav-link[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector('div.feature-content-item[alt="2"]').classList.add("active");
    document.querySelector('a.nav-link[alt="2"]').classList.add("active");
    currentImg = 2;
})
document.querySelector('a.nav-link[alt="3"]').addEventListener("click", (a) => {
    a.preventDefault();
    document.querySelector("div.feature-content-item[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector("a.nav-link[alt='" + currentImg + "']").classList.remove("active");
    document.querySelector('div.feature-content-item[alt="3"]').classList.add("active");
    document.querySelector('a.nav-link[alt="3"]').classList.add("active");
    currentImg = 3;
})

// Text typed
let typed = new Typed('#text-typed', {
    "strings": ["team.", "startup.", "business."],
    "typeSpeed": 90,
    "backSpeed": 30,
    "loop": true,
    "backDelay": 2500
});