document.addEventListener('DOMContentLoaded', function() {
    var menuLink = document.getElementById('menuLink');
    var menuDropdown = document.getElementById('menuDropdown');
    var background = document.createElement('div');
    background.className = 'background';

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        menuDropdown.classList.toggle('show');
        if (menuDropdown.classList.contains('show')) {
            menuLink.innerHTML = 'Close';
            document.body.appendChild(background);
        } else {
            menuLink.innerHTML = 'Menu';
            document.body.removeChild(background);
        }
    });

    // menuLink.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (menuDropdown.innerHTMl = "Close") {
    //         menuDropdown.classList.toggle('show');
    //         menuLink.innerHTML = 'Menu';
    //     } else {
    //         alert("logic glt hai")
    //     }
    // })
});