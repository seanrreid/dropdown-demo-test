var dropdownTrigger = document.getElementById('dropdownTrigger'),
    dropdownMenu = document.getElementById('dropdownMenu');

var menuToggle = function() {
    if(dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";

    } else {
        dropdownMenu.style.display = "block";
    }
};

dropdownTrigger.addEventListener('click', menuToggle);
