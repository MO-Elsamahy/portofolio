// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load Saved Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-mode');

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Parallax Scrolling
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }
});
