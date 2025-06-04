document.getElementById("currentyear").textContent = new Date().getFullYear()
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 25;
const windSpeed = 10;

document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * 
    Math.pow(wind, 0.16) + 0.3965 * temp *
    Math.pow(wind,0.16)).toFixed(1);
}

let windChillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8)
{
    windChillValue = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windChill").textContent = windChillValue;



