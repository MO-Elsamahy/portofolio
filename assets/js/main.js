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

// Research Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    document.querySelectorAll('.research-card').forEach(card => {
      const tags = card.dataset.tags.split(', ');
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Data Visualization (Chart.js)
const ctx = document.getElementById('climateChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Global Temperature Rise (°C)',
      data: [1.02, 1.08, 1.12, 1.18],
      borderColor: '#4682B4',
      fill: false
    }]
  }
});

// Blog Search & Filtering
document.getElementById('searchBlog').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  document.querySelectorAll('.blog-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
  const category = e.target.value;
  document.querySelectorAll('.blog-card').forEach(card => {
    const cardCategory = card.dataset.category;
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Form Submission with Formspree
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      alert('Message sent!');
      e.target.reset();
    }
  } catch (error) {
    alert('Error sending message');
  }
});
