var typed = new Typed('#element', {
  strings: ['Web Developer', 'JavaScript Developer','Web Designer'],
  typeSpeed: 50,
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

