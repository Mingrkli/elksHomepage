// Parallax
// Just a cool visual effect thingy
// ======================================================================================
// Light
const sun = document.querySelector("#sun");
const mountain2 = document.querySelector("#mountain2");
const mountain3 = document.querySelector("#mountain3");
const mountain4 = document.querySelector("#mountain4");
// Dark
const moon = document.querySelector("#moon");
const stars = document.querySelector("#stars");
const mountainDark2 = document.querySelector("#mountainDark2");
const mountainDark3 = document.querySelector("#mountainDark3");
const mountainDark4 = document.querySelector("#mountainDark4");
// Team Logo
const elkLogo = document.querySelector("#teamLogo img");
const elkLogoTitle = document.querySelector("#teamLogo h5");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Light
    mountain2.style.top = value * 0.25 + "px";
    mountain3.style.top = value * 0.5 + "px";
    mountain4.style.top = value * 0.75 + "px";
    sun.style.top = value * 0.8 + "px";

    // Dark
    mountainDark2.style.top = value * 0.25 + "px";
    mountainDark3.style.top = value * 0.5 + "px";
    mountainDark4.style.top = value * 0.75 + "px";
    moon.style.top = value * 0.8 + "px";
    stars.style.top = value * 0.8 + "px";

    // Team Logo
    elkLogo.style.top = "calc(50% + " + value * 0.5 + "px)";
    elkLogoTitle.style.top = "calc(40% + " + value * 0.5 + "px)";
});
