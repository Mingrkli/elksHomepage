// Team Goals
// ===================================================================================
const teamGoalsBtns = document.querySelectorAll("#teamGoalsBtns button");
const teamGoalsShow = document.querySelectorAll("#teamGoalsShow div");

// Run function when user presses teamGoalsBtns
teamGoalsBtns.forEach((btn) => {
    sectionTeamShowText(btn, teamGoalsBtns, teamGoalsShow);
});

// Bio Data Generation
// The following takes the data (JSON) and generates the elements and append it to the #teamMembersShow elements
// ===================================================================================
const teamMembersShowContainer = document.querySelector("#teamMembersShow");
let count = 1;

teamBioData.forEach((member) => {
    let div = document.createElement("div");
    if (count == 1) {
        div.classList.add("selected-goal");
    }
    div.setAttribute("data-section", `${count}`);

    let inner = `
    <article class="member-profile">
        <h1>${member.name}</h1>

        <div class="member-bio">
            <img
                src=${member.img}
                alt=""
            />
            <p>${member.bio}</p>
        </div>
        <ul class="member-bullets">`;

    member.accomplishments.forEach((accomplishment) => {
        inner += `<li>${accomplishment}</li>`;
    });

    inner += `</ul>
    </article>
    `;

    div.innerHTML += inner;
    teamMembersShowContainer.append(div);

    count++;
});

// Meet our team
// ===================================================================================
const teamMembersBtns = document.querySelectorAll("#teamMembersBtns button");
const teamMembersShow = document.querySelectorAll("#teamMembersShow div");

// Run function when user presses teamMembersBtns
teamMembersBtns.forEach((btn) => {
    sectionTeamShowText(btn, teamMembersBtns, teamMembersShow);
});

// Function
// ===================================================================================
// Checks the user pressings the btn in which shows the information which has the same data value as the btn clicked
function sectionTeamShowText(btn, buttons, divs) {
    btn.addEventListener("click", (e) => {
        // Removes selected-goal class from all teamGoalsBtns
        buttons.forEach((btn2) => {
            btn2.classList.remove("selected-goal");
        });

        btn.classList.add("selected-goal");

        // Show the team goal which is the same as the number of the goal btn
        divs.forEach((text) => {
            if (
                text.getAttribute("data-section") ==
                e.target.getAttribute("data-section")
            ) {
                text.classList.add("selected-goal");
            } else {
                text.classList.remove("selected-goal");
            }
        });
    });
}
