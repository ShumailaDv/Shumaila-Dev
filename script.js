// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Effect
const text = ["Shumaila", "Web Developer", "Frontend Expert"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll Reveal
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
