document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

//Check if visitor is new by looking into localStorage
if (!localStorage.getItem("visited")) {
    //Wait until the HTML content is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        //Select the element to show the welcome message
        const message = document.getElementById("welcome-message");
        //Show welcome message for first-time visitors
        message.textContent = "Welcome to Nile Origin Safaris for the first time!"
    });

    //Mark the user as having visited
    localStorage.setItem("visited", "true");
}
else {
    //if not the first time, show different message
    document.addEventListener("DOMContentLoaded", () => {
        const message = document.getElementById("welcome-message");
        message.textContent = "Welcome back to  Nile Origin Safaris!"
    })
}