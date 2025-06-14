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
