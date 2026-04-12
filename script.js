// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// TYPING EFFECT
const words = ["Shumaila", "Web Developer", "Creative Coder"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  if (!deleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});
