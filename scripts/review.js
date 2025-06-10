 //Track review count
  //wait for the DOM
document.addEventListener("DOMContentLoaded", () => {
  //Get current count or start from zero
let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
const reviewCountElement = document.getElementById("reviewCount");
if (reviewCountElement) {
  reviewCountElement.textContent = count;
}
});