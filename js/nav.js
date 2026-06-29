/* ==============================================
   VELOX LIVING — SHARED NAV
   Inject nav + drawer into #nav-root.
   Configure before loading this script:
     window.NAV_BASE           e.g. '' (root) or '..' (one level deep)
     window.NAV_ALWAYS_SCROLLED  true on pages without a hero
   ============================================== */

// Google tag (gtag.js)
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-3QNP6ZYEL6';
  document.head.insertBefore(s, document.head.firstChild);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-3QNP6ZYEL6');
})();

// Tally embed (popup forms triggered by data-tally-open attribute)
(function () {
  if (document.querySelector('script[src*="tally.so/widgets/embed.js"]')) return;
  var t = document.createElement('script');
  t.async = true;
  t.src = 'https://tally.so/widgets/embed.js';
  document.head.appendChild(t);
})();

(function () {
  const base = (window.NAV_BASE || '').replace(/\/+$/, '');
  const p    = base ? base + '/' : '';
  const alwaysScrolled = !!window.NAV_ALWAYS_SCROLLED;

  // Use bare anchors on root; full path on sub-pages so links work cross-page
  const s = (id) => base ? p + 'index.html#' + id : '#' + id;

  const html =
    '<nav id="navbar" class="' + (alwaysScrolled ? 'scrolled' : 'transparent') + '"' +
        (alwaysScrolled ? ' data-always-scrolled="true"' : '') +
        ' role="navigation" aria-label="Main navigation">' +
    '<div class="container"><div class="nav-inner">' +
      '<a href="' + p + 'index.html" class="nav-logo" aria-label="Velox Living Home">' +
        '<img src="' + p + 'assets/VeloxLivingLogoTransparent.png" alt="Velox Living Logo" width="44" height="44" />' +
      '</a>' +
      '<ul class="nav-links" role="list">' +
        '<li><a href="' + s('properties') + '" data-i18n="nav.properties">Properties</a></li>' +
        '<li><a href="' + s('services')   + '" data-i18n="nav.services">Services</a></li>' +
        '<li><a href="' + p + 'about.html" data-i18n="nav.about">About</a></li>' +
        '<li><a href="' + p + 'faq.html" data-i18n="nav.faq">FAQ</a></li>' +
        '<li><a href="' + p + 'pricing.html" data-i18n="nav.pricing">Pricing</a></li>' +
        '<li><a href="' + s('footer')     + '" data-i18n="nav.contact">Contact</a></li>' +
      '</ul>' +
      '<div class="lang-switcher" aria-label="Language selector">' +
        '<button class="lang-trigger" aria-haspopup="listbox" aria-expanded="false">' +
          '<img src="' + p + 'assets/flags/en.svg" alt="English" class="flag-icon lang-current-flag">' +
          '<svg class="lang-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">' +
            '<path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
          '</svg>' +
        '</button>' +
        '<div class="lang-menu" role="listbox">' +
          '<button class="lang-btn active" data-lang="en" role="option" title="English"><img src="' + p + 'assets/flags/en.svg" alt="" class="flag-icon"><span>EN</span></button>' +
          '<button class="lang-btn" data-lang="ro" role="option" title="Română"><img src="' + p + 'assets/flags/ro.svg" alt="" class="flag-icon"><span>RO</span></button>' +
          '<button class="lang-btn" data-lang="hu" role="option" title="Magyar"><img src="' + p + 'assets/flags/hu.svg" alt="" class="flag-icon"><span>HU</span></button>' +
          '<button class="lang-btn" data-lang="es" role="option" title="Español"><img src="' + p + 'assets/flags/es.svg" alt="" class="flag-icon"><span>ES</span></button>' +
        '</div>' +
      '</div>' +
      '<a href="#" class="nav-cta"' +
        ' data-tally-open="q4o5xY"' +
        ' data-tally-layout="modal"' +
        ' data-tally-width="720"' +
        ' data-tally-overlay="1"' +
        ' style="margin-left:14px;padding:8px 16px;background:#228B22;color:#fff;border-radius:6px;font-weight:600;font-size:0.85rem;text-decoration:none;white-space:nowrap;display:inline-flex;align-items:center;transition:background .2s;"' +
        ' onmouseover="this.style.background=\'#1a6b1a\'"' +
        ' onmouseout="this.style.background=\'#228B22\'"' +
        ' data-i18n="nav.cta">' +
        'Free Consultation' +
      '</a>' +
      '<button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div></div></nav>' +
    '<div class="nav-drawer" id="nav-drawer" role="dialog" aria-label="Mobile navigation">' +
      '<a href="#" class="nav-cta-drawer"' +
        ' data-tally-open="q4o5xY"' +
        ' data-tally-layout="modal"' +
        ' data-tally-width="720"' +
        ' data-tally-overlay="1"' +
        ' style="display:block;margin:0 0 18px;padding:14px 20px;background:#228B22;color:#fff;border-radius:8px;font-weight:600;text-align:center;text-decoration:none;"' +
        ' data-i18n="nav.cta">' +
        'Free Consultation' +
      '</a>' +
      '<a href="' + s('properties') + '" data-i18n="nav.properties">Properties</a>' +
      '<a href="' + s('services')   + '" data-i18n="nav.services">Services</a>' +
      '<a href="' + p + 'about.html" data-i18n="nav.about">About</a>' +
      '<a href="' + p + 'faq.html" data-i18n="nav.faq">FAQ</a>' +
      '<a href="' + p + 'pricing.html" data-i18n="nav.pricing">Pricing</a>' +
      '<a href="' + s('footer')     + '" data-i18n="nav.contact">Contact</a>' +
      '<div class="lang-switcher drawer-lang">' +
        '<button class="lang-btn active" data-lang="en" title="English"><img src="' + p + 'assets/flags/en.svg" alt="English" class="flag-icon"></button>' +
        '<button class="lang-btn" data-lang="ro" title="Română"><img src="' + p + 'assets/flags/ro.svg" alt="Română" class="flag-icon"></button>' +
        '<button class="lang-btn" data-lang="hu" title="Magyar"><img src="' + p + 'assets/flags/hu.svg" alt="Magyar" class="flag-icon"></button>' +
        '<button class="lang-btn" data-lang="es" title="Español"><img src="' + p + 'assets/flags/es.svg" alt="Español" class="flag-icon"></button>' +
      '</div>' +
    '</div>';

  var root = document.getElementById('nav-root');
  if (root) root.outerHTML = html;
}());

// Forward UTM parameters into Tally popup as hidden fields
// When a visitor arrives via ?utm_source=facebook (or any UTM tag),
// those values are automatically passed to the Tally form so every
// submission is attributed to its traffic source.
(function () {
  var params  = new URLSearchParams(window.location.search);
  var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  var hidden  = {};
  utmKeys.forEach(function (k) { var v = params.get(k); if (v) hidden[k] = v; });

  // Persist UTMs across page navigations within the same session
  try {
    var stored = sessionStorage.getItem('velox_utm');
    if (stored) {
      var prev = JSON.parse(stored);
      // URL params take priority over stored ones
      hidden = Object.assign({}, prev, hidden);
    }
    if (Object.keys(hidden).length) {
      sessionStorage.setItem('velox_utm', JSON.stringify(hidden));
    }
  } catch (e) {}

  if (!Object.keys(hidden).length) return; // no UTMs — let default data-attr behaviour handle it

  // Intercept clicks on any Tally popup trigger and inject hidden fields
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-tally-open]');
    if (!el) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    var id = el.getAttribute('data-tally-open');
    function openWithUtm() {
      window.Tally.openPopup(id, {
        layout:       'modal',
        width:        720,
        overlay:      true,
        hiddenFields: hidden
      });
    }
    if (window.Tally) { openWithUtm(); }
    else { document.addEventListener('tally-loaded', openWithUtm, { once: true }); }
  }, true);
}());
