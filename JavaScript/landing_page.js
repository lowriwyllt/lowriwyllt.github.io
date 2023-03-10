function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");
  const navbar = document.querySelectorAll(".Navbar");

  navs.forEach((nav) => nav.classList.toggle("Navbar__Items__ToggleShow"));
  navbar.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);
