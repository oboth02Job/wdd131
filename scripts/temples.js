// set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

//set the last modified date
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('show');
});

//toggle the nav menu and icon
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");

    // Toggle between hamburger and X symbol
    if 
    (navMenu.classList.contains(show)) {
        hamburger.innerHTML = "&times;"; // X symbol
    } else {
        hamburger.innerHTML = "&#9776;"; // hamburger symbol
    }
    });
});