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

 