const toggle = document.querySelector(".btn-toggle");
const close = document.querySelector(".btn-close");
const grid = document.querySelector(".grid-menu");
const navLink = document.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  grid.classList.toggle("active");
});

close.addEventListener("click", () => {
  grid.classList.toggle("active");
});

if (
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  navLink.forEach((element) =>
    element.addEventListener("click", () => {
      grid.classList.toggle("active");
    })
  );
}
