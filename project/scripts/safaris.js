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
