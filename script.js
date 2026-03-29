// ===== THEME TOGGLE =====
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// ===== TYPING EFFECT =====
const words = ["Web Developer", "Frontend Expert", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function typing() {
  current = words[i];
  
  if (!isDeleting) {
    document.querySelector(".typing").textContent = current.slice(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typing, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").textContent = current.slice(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typing, isDeleting ? 50 : 100);
}
typing();

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
