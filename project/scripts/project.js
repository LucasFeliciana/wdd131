// MOBILE MENU

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("header nav");

function toggleMenu() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
}