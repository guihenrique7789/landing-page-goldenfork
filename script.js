const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const navbar = document.querySelector(".navbar");

function openMenu() {
  hamburger.classList.add("active");
  navLinks.classList.add("active");
  document.body.classList.add("no-scroll"); 
}

function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

hamburger.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) closeMenu();
  else openMenu();
});

// fecha o menu quando clica num link 
navItems.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// fecha ao clicar fora do conteúdo do menu 
navLinks.addEventListener("click", (e) => {
  if (e.target === navLinks) closeMenu();
});

// scroll handler: não esconde a navbar se o menu estiver aberto
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("active")) return; // menu abertinho
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("hide"); // esconde no scroll
  } else {
    navbar.classList.remove("hide");
  }
  lastScroll = currentScroll;
});
