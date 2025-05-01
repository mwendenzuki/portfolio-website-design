// === Search Overlay Toggle ===
const searchIcon = document.querySelector(".search-icon");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
  searchOverlay.style.display = "none";
});
