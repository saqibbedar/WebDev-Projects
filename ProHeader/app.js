let clutter = ["Home", "About", "Work", "Contact"].map(navLink => `
    <div class="link">
        <a href="#">${navLink}</a>
    </div>
    `
).join("");

document.querySelector(".nav-links").innerHTML = clutter;

const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const div = document.querySelector(".maintain-fixed-navbar");

// Set the height of the div to the height of the header
div.style.height = `${headerRect.height}px`;

// initially active first element
const activeNav = document.querySelector(".link a");
activeNav.classList.add("active-navLink");

// to activate all
const active = document.querySelectorAll(".link a");

active.forEach(link => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active-navLink")) {
            // Remove the "active-navLink" class from all links
            active.forEach(link => {
                link.classList.remove("active-navLink");
            });
            // Add the "active-navLink" class to the clicked link
            link.classList.add("active-navLink");
        }
    });
});
