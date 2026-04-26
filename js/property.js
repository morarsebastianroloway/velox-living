/* ==============================================
   VELOX LIVING — PROPERTY PAGE JS
   Gallery slider, sticky bar, map init
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Blurred backdrop for main gallery slides ── */
  document.querySelectorAll('.swiper-property .swiper-slide').forEach(slide => {
    const img = slide.querySelector('img');
    if (img) slide.style.setProperty('--bg-img', `url('${img.getAttribute('src')}')`);
  });

  /* ── Swiper Gallery ── */
  const thumbsSwiper = new Swiper('.swiper-thumbs', {
    spaceBetween: 8,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });

  const mainSwiper = new Swiper('.swiper-property', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });

  /* ── Property Sticky Bar ── */
  const stickyBar  = document.getElementById('property-sticky-bar');
  const heroBottom = document.querySelector('.property-hero');

  if (stickyBar && heroBottom) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyBar.classList.toggle('visible', !entry.isIntersecting);
      },
      { rootMargin: '-72px 0px 0px 0px' }
    );
    observer.observe(heroBottom);
  }

  /* ── Leaflet Map ── */
  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    const lat  = parseFloat(mapEl.dataset.lat  || '46.5427');
    const lng  = parseFloat(mapEl.dataset.lng  || '24.5575');
    const zoom = parseInt(mapEl.dataset.zoom || '15', 10);

    const map = L.map('map', {
      center: [lat, lng],
      zoom: zoom,
      zoomControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    // Custom navy marker
    const icon = L.divIcon({
      className: '',
      html: `<svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 10.627 14.4 26.4 15.04 27.12a1.28 1.28 0 001.92 0C17.6 42.4 32 26.627 32 16 32 7.163 24.837 0 16 0z" fill="#001F3F"/>
        <circle cx="16" cy="16" r="6" fill="#228B22"/>
      </svg>`,
      iconSize: [32, 44],
      iconAnchor: [16, 44],
      popupAnchor: [0, -44],
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(mapEl.dataset.title || 'Property Location');
  }

  /* ── Inquiry Form Submission ── */
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = form.querySelector('[name="name"]').value.trim();
      const email   = form.querySelector('[name="email"]').value.trim();
      const phone   = form.querySelector('[name="phone"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const property = document.title;

      // Build WhatsApp message
      const text = `Hello Velox Living! 👋\n\nI'm interested in: *${property}*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
      const url  = `https://wa.me/40700000000?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

});
