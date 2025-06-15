//DOM interaction for safaris.html
//Triggered when safari titles are clicked

//Function to update the paragraph with more details
function updateDescription (titleId, descId, text) {
    const titleElement = document.getElementById(titleId); //Get the h3 element
    const descElement = document.getElementById(descId); //Get the description <p>

    //Add event listener to the heading
    titleElement.addEventListener("click", () => {
        descElement.textContent = text; //Change the text content
    });
}

//Call the function for each safari title
updateDescription(
    "gorilla-heading",
    "gorilla-description",
    "Visit Bwindi and trek through dense forest to see the endangered mountain gorillas up close!"
);

updateDescription(
    "nile-heading",
    "nile-description",
    "Enjoy a relaxing boat ride on the Nile with scenic views, bird watching, and sunset moments!"
);

updateDescription(
    "queen-heading",
    "queen-description",
    "Explore Queen Elizabeth National park with game drives, crater lakes, and boat safaris!"
);

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
