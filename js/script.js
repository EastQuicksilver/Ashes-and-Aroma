// MOBILE MENU
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('active');
}

// MENU FILTERING
function filterMenu(category, event) {
  const items = document.querySelectorAll('.menu-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  items.forEach(item => {
    const show = category === 'all' || item.dataset.category === category;
    item.classList.toggle('hidden', !show);
  });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ANALYTICS
function trackEvent(category, action, label) {
  console.log('Event:', category, action, label);
}

// TRACK WHATSAPP & PHONE
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () =>
    trackEvent('Conversion', 'WhatsApp Order', link.textContent.trim())
  );
});
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () =>
    trackEvent('Conversion', 'Phone Call', link.getAttribute('href'))
  );
});

// CURRENT YEAR
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();