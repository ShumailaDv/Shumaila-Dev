

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
  const words = ["Shumaila","a Frontend Developer", "a Web Developer", "a Creative Coder"];
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
// FILTER
const filterButtons = document.querySelectorAll('.skill-filters button');
const cards = document.querySelectorAll('.skill-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// 3D TILT EFFECT
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 10);
    const rotateY = ((centerX - x) / 10);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// ================= BOOK CALL =================
function bookCall() {
  window.open(
    "https://calendly.com/your-link",
    "_blank",
    "noopener,noreferrer"
  );
}
// ABOUT SECTION ANIMATION ON SCROLL
const aboutBox = document.querySelector("#about .container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);


observer.observe(aboutBox);
// AUTO YEAR UPDATE
document.querySelector(".footer-text").innerHTML =
  `© ${new Date().getFullYear()} <span>Shumaila Dev</span>. All Rights Reserved.`;
