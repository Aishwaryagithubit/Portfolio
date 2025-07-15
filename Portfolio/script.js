// Reveal on scroll
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (const revealElement of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElement.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      revealElement.classList.add('active');
    } else {
      revealElement.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);
reveal(); // initial call

// Theme toggle
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

lightIcon.style.display = 'none'; // start in light mode

darkIcon.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  darkIcon.style.display = 'none';
  lightIcon.style.display = 'inline';
});

lightIcon.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  lightIcon.style.display = 'none';
  darkIcon.style.display = 'inline';
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('active'), 50);
      } else {
        card.style.display = 'none';
        card.classList.remove('active');
      }
    });
  });
});


