//HmaburgerMenu

document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('.mobile-menu .mobile-menu-toggle');
  const mobileMenu = document.querySelector(' .mobile-menu .mobile-menu-items');

  toggleMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
