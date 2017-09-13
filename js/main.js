var dropdownTrigger = document.getElementById('dropdownTrigger'),
    dropdownMenu = document.getElementById('dropdownMenu');

var classSwap = function(e,className1,className2) {
    if (e.classList.contains(className1)) {
        e.classList.remove(className1);
    } else {
        e.classList.add(className1);
    }
    if (e.classList.contains(className2)) {
        e.classList.remove(className2);
    } else {
        e.classList.add(className2);
    }
};

var menuToggle = function() {
    classSwap(dropdownMenu, "visibleMenu", "hiddenMenu");
};

dropdownTrigger.addEventListener('click', menuToggle);
