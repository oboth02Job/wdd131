document.getElementById("hamburger").addEventListener('click', function() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('show');
});

//toggle the nav menu and the icon
document.addEventListener("DOMContentLoaded", function () {
     const hamburger = document.getElementById("hamburger");
     const navMenu = documentElement.getElementsById("nav-menu");

     hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        //Toggle between hamburger and X Symbol
        if
        (navMenu.classList.contains(show)) {
            hamburger.innerHTML = "&times"
        }

        else {
            hamburger.innerHTML = "&#9776"
        }
     }); 
});