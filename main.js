const lightButton = document.getElementById("light-theme-button");
const darkButton = document.getElementById("dark-theme-button");

lightButton.addEventListener("click", function() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

darkButton.addEventListener("click", function() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});
