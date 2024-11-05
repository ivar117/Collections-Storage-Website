"use strict";
/* Function to open confirmation modal when deleting collection or post */
function openModal() {
    const modal = document.getElementById('delete-modal');
    modal.style.display = 'block';
    const modalHandleEscPress = (event) => {
        if (event.key == "Escape") { //27 är keycode för escape
            modal.style.display = 'none';
            document.removeEventListener("keydown", modalHandleEscPress);
        }
    };
    document.addEventListener("keydown", modalHandleEscPress); //Stäng sidenav om man trycker på escape
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
