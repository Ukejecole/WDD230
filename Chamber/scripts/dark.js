const toggle = document.querySelector("#toggle");
const main = document.querySelector("main, dark-1, dark-2, dark-3, dark-4, dark-4, dark-6");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    // Dark Mode
    main.style.background = "#000";
    main.style.color = "#fff";
  } else {
    // Light Mode
    main.style.background = "#eee";
    main.style.color = "#000";
  }
});
