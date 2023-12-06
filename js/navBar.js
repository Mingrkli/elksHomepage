// NavBar Phone Menu Btn
// ======================================================================================
const phoneMenuBtn = document.querySelector("#phone-menu-btn");
const navAside = document.querySelector("#nav-aside");

// check phone user clicked on phoneMenuBtn
phoneMenuBtn.addEventListener("click", () => {
    navAside.classList.toggle("expanded");
});

// NavBar Location
// ======================================================================================
const navLocation = document.querySelector("#nav-location");
const mainSections = document.querySelectorAll("section");
const link = document.querySelectorAll("nav a");
let lastClicked;

// Detects when window loads which makes the navLocation resize into the lastClicked
window.addEventListener("DOMContentLoaded", () => {
    linkClicked(document.querySelector(".selected"));
});

// Detects when window resizes so that the navLocation resizes
window.addEventListener("resize", () => {
    linkClicked(lastClicked);
});

// For each link in the nav, there will be an listen on click then run linkClicked function on that link clicked
link.forEach((link) => {
    link.addEventListener("click", (e) => {
        linkClicked(e.target);
    });
});

// on link clicked, we will change the styles of the navLocation element
const linkClicked = (e) => {
    navLocation.style.left = e.offsetLeft + "px";
    navLocation.style.top = e.offsetTop + "px";
    navLocation.style.width = e.offsetWidth + "px";
    navLocation.style.height = e.offsetHeight + "px";
    navLocation.style.borderBottom =
        "2px solid var(--c-main-" + e.getAttribute("data-section") + ")";
    navLocation.style.background =
        "linear-gradient(0deg, var(--c-main-" +
        e.getAttribute("data-section") +
        "-faded), transparent)";
    navLocation.style.filter =
        "drop-shadow(0 -5px 10px var(--c-main-" +
        e.getAttribute("data-section") +
        "))";

    lastClicked = e;
};

// Detects window scroll and changes nav location to where user scroll passed
window.onscroll = () => {
    mainSections.forEach((sections) => {
        let top = window.scrollY;
        let offset = sections.offsetTop;
        let height = sections.offsetHeight;

        if (top >= offset && top < offset + height) {
            link.forEach((link) => {
                link.classList.remove("selected");

                if (
                    link.getAttribute("data-section") ==
                    sections.getAttribute("data-section")
                ) {
                    link.classList.add("selected");
                    linkClicked(link);
                }
            });
        }
    });
};

// NavBar Light/Dark Mode
// Light/Dark Animation
// ======================================================================================
// Check if darkMode
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") == "true") {
        tl.play();
        body.classList.add("darkMode");
    }
});

const body = document.querySelector("body");
const LightDarkModeBtn = document.querySelector("#LightDarkModeBtn");
const tl = gsap.timeline();
tl.to("#sun", { duration: 2, y: 500, opacity: 0 }, -1);
tl.to(".mountainDark", { duration: 1, opacity: 1 }, -1);
tl.to("nav", { duration: 2, background: "var(--c-bg-dark-faded)" }, -1);
tl.to(
    "body",
    {
        duration: 2,
        backgroundColor: "var(--c-bg-dark)",
        color: "var(--c-bg-light)",
    },
    -1
);
tl.to("#moon", { duration: 2, y: 0, opacity: 1 }, -1.5);
tl.to("#stars", { duration: 1, opacity: 1 }, 0);
tl.reverse();

LightDarkModeBtn.addEventListener("click", () => {
    if (!body.classList.contains("darkMode")) {
        tl.play();

        body.classList.add("darkMode");
        localStorage.setItem("darkMode", "true");
    } else {
        tl.reverse();

        body.classList.remove("darkMode");
        localStorage.setItem("darkMode", "false");
    }
});
