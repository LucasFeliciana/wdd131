let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

const reviewCountDisplay = document.querySelector("#review-count");

reviewCountDisplay.textContent = reviewCount;

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

