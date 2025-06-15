document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const safariOptions = [
    { value: "gorilla", text: "3-Day Gorilla Trekking" },
    { value: "nile", text: "2-Day Nile River Cruise Safari" },
    { value: "murchison", text: "5-Day Murchison Falls Safari" },
    { value: "queen", text: "4-Day Queen Elizabeth Safari" },
    { value: "kidepo", text: "6-day Kidepo Valley National Park Safari" },
    { value: "sipi", text: "2-Day Sipi Falls Hiking Safari" },
];

const safariSelect = document.getElementById("safari");
safariOptions.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    safariSelect.appendChild(opt);
});


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