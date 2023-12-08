const hamburgerToggle = document.querySelector("#header__hamburger-toggle");
const navbar = document.querySelector("#header__navbar")
hamburgerToggle.addEventListener("click", onHamburgerClick)

function onHamburgerClick() {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    }
    else {
        navbar.classList.remove("open");
    }
}
