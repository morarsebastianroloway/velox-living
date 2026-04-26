/* ==============================================
   VELOX LIVING — SHARED NAV
   Inject nav + drawer into #nav-root.
   Configure before loading this script:
     window.NAV_BASE           e.g. '' (root) or '..' (one level deep)
     window.NAV_ALWAYS_SCROLLED  true on pages without a hero
   ============================================== */

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
        '<img src="' + p + 'assets/VeloxLivingLogo.png" alt="Velox Living Logo" width="44" height="44" />' +
        '<span class="nav-logo-text">Velox Living</span>' +
      '</a>' +
      '<ul class="nav-links" role="list">' +
        '<li><a href="' + s('properties') + '" data-i18n="nav.properties">Properties</a></li>' +
        '<li><a href="' + s('services')   + '" data-i18n="nav.services">Services</a></li>' +
        '<li><a href="' + s('why-velox') + '" data-i18n="nav.about">About</a></li>' +
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
      '<button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div></div></nav>' +
    '<div class="nav-drawer" id="nav-drawer" role="dialog" aria-label="Mobile navigation">' +
      '<a href="' + s('properties') + '" data-i18n="nav.properties">Properties</a>' +
      '<a href="' + s('services')   + '" data-i18n="nav.services">Services</a>' +
      '<a href="' + s('why-velox') + '" data-i18n="nav.about">About</a>' +
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
