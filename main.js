const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll("#main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

const root = document.documentElement;

function setScale(scale) {
  const clamped = Math.min(1.25, Math.max(0.9, scale));
  root.style.setProperty("--font-scale", clamped);
  localStorage.setItem("lapro-font-scale", clamped);
}

const savedScale = Number(localStorage.getItem("lapro-font-scale"));
if (savedScale) setScale(savedScale);

document.querySelector("#font-increase")?.addEventListener("click", () => {
  const current = Number(getComputedStyle(root).getPropertyValue("--font-scale")) || 1;
  setScale(current + 0.05);
});

document.querySelector("#font-decrease")?.addEventListener("click", () => {
  const current = Number(getComputedStyle(root).getPropertyValue("--font-scale")) || 1;
  setScale(current - 0.05);
});

document.querySelector("#font-reset")?.addEventListener("click", () => setScale(1));

document.querySelector("#contrast-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
  localStorage.setItem(
    "lapro-high-contrast",
    document.body.classList.contains("high-contrast") ? "1" : "0"
  );
});

if (localStorage.getItem("lapro-high-contrast") === "1") {
  document.body.classList.add("high-contrast");
}
