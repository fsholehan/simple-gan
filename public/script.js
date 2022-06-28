// dark mode

const darkModeToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkModeToggle.addEventListener("click", function () {
  if (darkModeToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//switch theme

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkModeToggle.checked = true;
} else {
  darkModeToggle.checked = false;
}
