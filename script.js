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
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("active");
}

// Auto close menu on click (mobile UX)
const menu = document.getElementById("menu");

if (menu) {
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}


// ================= TYPING EFFECT =================
const typingEl = document.getElementById("typing");

if (typingEl) {
  const words = ["Shumaila", "a Web Developer", "a Creative Coder"];
  let i = 0;
  let j = 0;
  let deleting = false;

  function type() {
    const current = words[i];

    if (!deleting) {
      typingEl.textContent = current.substring(0, j++);
      
      if (j > current.length) {
        deleting = true;
        setTimeout(type, 1200);
        return;
      }
    } else {
      typingEl.textContent = current.substring(0, j--);

      if (j < 0) {
        deleting = false;
        i = (i + 1) % words.length;
      }
    }

    setTimeout(type, deleting ? 50 : 90);
  }

  type();
}


// ================= SCROLL ANIMATION =================
const fadeElements = document.querySelectorAll(".fade");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ================= PARTICLES =================
if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
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
}


// ================= BOOK CALL =================
function bookCall() {
  window.open(
    "https://calendly.com/your-link",
    "_blank",
    "noopener,noreferrer"
  );
}
// IMAGE FADE-IN + SLIDE
window.addEventListener("load", () => {
  const image = document.querySelector(".home-image img");

  image.style.opacity = "0";
  image.style.transform = "translateX(100px)";

  setTimeout(() => {
    image.style.transition = "1s ease";
    image.style.opacity = "1";
    image.style.transform = "translateX(0)";
  }, 300);
});
