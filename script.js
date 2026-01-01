const reveals = document.querySelectorAll(".reveal");
const scrollBtn = document.getElementById("scrollTopBtn");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};






