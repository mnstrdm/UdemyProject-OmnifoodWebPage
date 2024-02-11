const hambMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

hambMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const menuLinks = document.querySelectorAll("a.main-nav-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

const heroSection = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);
