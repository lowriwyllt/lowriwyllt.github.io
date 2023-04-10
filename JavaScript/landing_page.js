function classToggle() {
  const navs = document.querySelectorAll(".Navbar__links");
  const navbar = document.querySelectorAll(".Navbar");

  navs.forEach((nav) => nav.classList.toggle("Navbar__links__ToggleShow"));
  navbar.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);
