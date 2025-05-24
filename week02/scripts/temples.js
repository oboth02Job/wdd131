document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById(nav-li);
    menu.classList.toggle('active')
})

const hamburger = 
document.getElementById('hamburger');
const navli = 
document.getElementById('nav-li');
hamburger.addEventListener('click',() => 
{
    navLinks.classList.toggle('show');
});