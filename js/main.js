/* ==============================================
   VELOX LIVING — MAIN JS
   Nav scroll behavior, hamburger, language switcher
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Nav ── */
  const navbar = document.getElementById('navbar');

  function updateNav() {
    if (navbar.dataset.alwaysScrolled) return;
    if (window.scrollY > 60) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── Hamburger Menu ── */
  const hamburger = document.getElementById('nav-hamburger');
  const drawer    = document.getElementById('nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', drawer.classList.contains('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        drawer && drawer.classList.remove('open');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
