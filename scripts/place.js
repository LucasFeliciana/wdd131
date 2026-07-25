const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 40;
const windSpeed = 8;

function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

const windChill = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °F`;
} else {
    windChill.textContent = "N/A";
}