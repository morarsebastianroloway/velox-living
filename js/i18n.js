/* ==============================================
   VELOX LIVING — i18n SYSTEM
   Loads JSON translations, applies to DOM via data-i18n
   Language persisted in localStorage
   ============================================== */

const LANGS = ['en', 'ro', 'hu', 'es'];
const DEFAULT_LANG = 'en';
const _fp = (window.NAV_BASE ? window.NAV_BASE.replace(/\/+$/, '') + '/' : '') + 'assets/flags/';
const FLAG_DATA = {
  en: { src: _fp + 'en.svg', alt: 'English' },
  ro: { src: _fp + 'ro.svg', alt: 'Română' },
  hu: { src: _fp + 'hu.svg', alt: 'Magyar' },
  es: { src: _fp + 'es.svg', alt: 'Español' },
};

let currentLang = localStorage.getItem('vl-lang') || DEFAULT_LANG;
let translations = {};

async function loadTranslations(lang) {
  try {
    const res = await fetch(`../i18n/${lang}.json`);
    if (!res.ok) throw new Error('Not found');
    translations = await res.json();
  } catch {
    // fallback: try from root (landing page)
    try {
      const res = await fetch(`i18n/${lang}.json`);
      translations = await res.json();
    } catch {
      translations = {};
    }
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedKey(translations, key);
    if (val) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', val);
      } else {
        el.innerHTML = val;
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNestedKey(translations, key);
    if (val) el.setAttribute('placeholder', val);
  });

  document.documentElement.lang = currentLang;
}

function getNestedKey(obj, key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

function closeAllDropdowns() {
  document.querySelectorAll('.lang-switcher.open').forEach(sw => {
    sw.classList.remove('open');
    const trigger = sw.querySelector('.lang-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

function updateTriggers(lang) {
  const data = FLAG_DATA[lang];
  if (!data) return;
  document.querySelectorAll('.lang-current-flag').forEach(img => {
    img.src = data.src;
    img.alt = data.alt;
  });
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('vl-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateTriggers(lang);
  closeAllDropdowns();
  loadTranslations(lang).then(applyTranslations);
}

document.addEventListener('DOMContentLoaded', () => {
  // Lang option click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      if (btn.closest('.drawer-lang')) {
        const drawer = document.getElementById('nav-drawer');
        const hamburger = document.getElementById('nav-hamburger');
        if (drawer) drawer.classList.remove('open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Dropdown trigger toggle
  document.querySelectorAll('.lang-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const switcher = trigger.closest('.lang-switcher');
      const isOpen = switcher.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        switcher.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', closeAllDropdowns);

  // Initial load
  setLang(currentLang);
});
