const menu = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav-link");

menu.onclick = function navmenu() {
  nav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
