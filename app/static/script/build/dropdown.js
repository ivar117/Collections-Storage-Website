"use strict";
function openDropdown() {
    const userDropdown = document.getElementById('user-dropdown');
    document.getElementById("arrow").style.transform = "rotate(180deg) scaleX(-1)";
    userDropdown.style.display = "block";
    const handleEscPress = (event) => {
        if (event.key == "Escape") { //27 är keycode för escape
            closeDropdown();
            document.removeEventListener("keydown", handleEscPress);
            document.removeEventListener("click", handleClickOutsideDropdown);
        }
    };
    const handleClickOutsideDropdown = (event) => {
        if (!userDropdown.contains(event.target)) {
            closeDropdown();
            document.removeEventListener("keydown", handleEscPress);
            document.removeEventListener("click", handleClickOutsideDropdown);
        }
    };
    requestAnimationFrame(() => {
        document.addEventListener("click", handleClickOutsideDropdown);
        document.addEventListener("keydown", handleEscPress);
    });
}
function closeDropdown() {
    document.getElementById("user-dropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg) scaleX(-1)";
}
function toggleDropdown() {
    if (document.getElementById("user-dropdown").style.getPropertyValue('display') == "block") {
        closeDropdown();
    }
    else {
        openDropdown();
    }
}
