// Observer Settings
// DO NOT TOUCH UNLESS KNOW WHAT YOUR DOING!!! (Your computer may shut down)
// ======================================================================================
const missionDiv = document.querySelectorAll("#mission > div");
const goalsDiv = document.querySelectorAll("#goals > div");
const teamDiv = document.querySelectorAll("#team > div");
const sprintsDiv = document.querySelectorAll("#sprints .cardText");

const options = {
    threshold: 0,
    rootMargin: "-100px",
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        // console.log(entry); // TESTING
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, options);

// Section Missions
// Observers the mission and goals section divs and adds show class when Intersecting
// ======================================================================================
missionDiv.forEach((div) => {
    observer.observe(div);
});

goalsDiv.forEach((div) => {
    observer.observe(div);
});

teamDiv.forEach((div) => {
    observer.observe(div);
});

sprintsDiv.forEach((div) => {
    observer.observe(div);
});
