document.getElementById("currentyear").textContent = new Date().getFullYear()
document.getElementById("lastModified").textContent = document.lastModified;

const temp = 25;
const windSpeed = 10;

document.getElementById("temperature").textContent = temp;
document.getElementById("windSpeed").textContent = windSpeed;

function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * 
    Math.pow(s, 0.16) + 0.3965 * t *
    Math.pow(s,0.16);
}

if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed).toFixed(2);

    document.getElementById("windChill").textContent = `${chill} C`
} else {
    document.getElementById("windChill").textContent = "N/A";
}
