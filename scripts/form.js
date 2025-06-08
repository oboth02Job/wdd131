//document.getElementById("currentyear").textContent = new Date().getFullYear()
//document.getElementById("lastModified").textContent = document.lastModified;


//product list array
const products = [
    {id: "fc-1888", name: "flux Capacitor"},
    {id: "fc-2050", name: "Power Laces"},
    {id: "fc-1987", name: "Time Circuits"},
    {id: "ac-2000", name: "Low Voltage"},
    {id: "jj-1969", name: "Warp Equalizer"},
];

//populate select dropdown with product names
const select = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option")
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

  //Track review count
  //wait for the DOM
document.addEventListener("DOMContentLoaded", () => {
  //Get current count or start from zero
let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;
});