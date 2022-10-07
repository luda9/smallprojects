const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("menu-visible");
});

const menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(item => {
  item.addEventListener("click", () => {
    navbar.classList.remove("menu-visible");
  })
});
