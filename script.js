// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 70;

  document.querySelectorAll("nav a").forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});

// Mobile nav toggle (optional future use)
const header = document.querySelector("header");
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");

// Add only on small screens
if (window.innerWidth < 768) {
  header.insertBefore(menuBtn, header.firstChild);

  const nav = document.querySelector("nav");
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
  });
}
