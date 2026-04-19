/* ==============================================
   VELOX LIVING — i18n SYSTEM
   Loads JSON translations, applies to DOM via data-i18n
   Language persisted in localStorage
   ============================================== */

const LANGS = ['en', 'ro', 'hu', 'es'];
const DEFAULT_LANG = 'en';

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

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('vl-lang', lang);

  // Update active button state across all lang buttons on page
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  loadTranslations(lang).then(applyTranslations);
}

// Init language buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Initial load
  setLang(currentLang);
});
