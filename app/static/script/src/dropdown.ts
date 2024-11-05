function openDropdown(): void {
    const userDropdown = document.getElementById('user-dropdown') as HTMLElement;
    document.getElementById("arrow").style.transform = "rotate(180deg) scaleX(-1)";

    userDropdown.style.display = "block";

    const handleEscPress = (event: KeyboardEvent): void => { //Stäng sidenav om man trycker på escape
        if (event.key == "Escape") { //27 är keycode för escape
            closeDropdown();
            document.removeEventListener("keydown", handleEscPress);
            document.removeEventListener("click", handleClickOutsideDropdown)
        }
    };

    const handleClickOutsideDropdown = (event: any) => {
        if (!userDropdown.contains(event.target)) {
            closeDropdown();
            document.removeEventListener("keydown", handleEscPress);
            document.removeEventListener("click", handleClickOutsideDropdown);
        }
    };

    requestAnimationFrame(() => {
        document.addEventListener("click", handleClickOutsideDropdown)
        document.addEventListener("keydown", handleEscPress);
    });
}
      
function closeDropdown(): void {
    document.getElementById("user-dropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg) scaleX(-1)";
}

function toggleDropdown(): void {
    if (document.getElementById("user-dropdown").style.getPropertyValue('display') == "block") {
        closeDropdown()
    }
    else {
        openDropdown()
    }
}
