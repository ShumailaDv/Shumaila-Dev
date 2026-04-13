// ================= LOADER =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.style.opacity = "0";
  loader.style.transition = "0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Auto close menu on click (mobile UX)
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});

// ================= TYPING EFFECT =================
const words = ["Shumaila", "a Web Developer", "a Creative Coder"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  if (!deleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 90);
}

type();

// ================= SCROLL ANIMATION =================
const elements = document.querySelectorAll(".fade");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();

// ================= PARTICLES =================
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ffc3" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffc3",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 0.5 }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
// ================= BOOK CALL =================
function bookCall() {
  window.open("https://calendly.com/your-link", "_blank");
}
