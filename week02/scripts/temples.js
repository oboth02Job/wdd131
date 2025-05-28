document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("nav-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        hamburger.classList.toggle("open")
    })
})