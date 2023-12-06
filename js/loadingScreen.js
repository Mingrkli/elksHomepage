// Loading Screen :D
// ========================================================================
// loading-wrapper class
const screenLoader = document.querySelector("#loading-screen");

// When screen finished loading
window.onload = () => {
    screenLoader.classList.add("loaded");
};

// Runs after the transition finished playing
screenLoader.addEventListener("transitionend", () => {
    screenLoader.classList.add("loaded-fin");
});
