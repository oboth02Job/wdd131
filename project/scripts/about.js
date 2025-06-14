//Define an array of core values

const coreValues = [
    "Respect of nature and wildlife",
    "Excellent customer service",
    "Cultural sensitivity",
    "Safety and responsibility",
    "Sustainable tourism practices"
];

//Function to populate the values list
function populateValues() {
    const list = document.getElementById("valuesList");

    //Clear the list
    list.innerHTML = "";

    //Loop thru the array and create list items
    coreValues.forEach((value) => {
        const li = document.getElementById("li");
        list.appendChild(li);
    });
}

//Function to toggle the visibility of the values list
function toggleValues() {
    const list = document.getElementById("valuesList");
    const button = document.getElementById("toggleValuesBtn");

    //Check if the list is hidden
    if (list.style.display ==="none") {
        populateValues();  //only populate when showing
        list.style.display = "block";
        button.textContent = "Hide Values"
    }
    else {
    list.style.display = "none";
    button.textContent = "Show Values";
    }
}

//Set up event listener when the page is ready
 document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleValuesBtn").addEventListener("click", toggleValues);
 });