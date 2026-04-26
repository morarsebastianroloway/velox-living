/* ==============================================
   VELOX LIVING — SHARED FOOTER
   Inject footer into #footer-root.
   Configure before loading this script:
     window.FOOTER_BASE  e.g. '' (root) or '..' (one level deep)
   ============================================== */

(function () {
  const base = (window.FOOTER_BASE || '').replace(/\/+$/, '');
  const p    = base ? base + '/' : '';
  const s    = (id) => base ? p + 'index.html#' + id : '#' + id;

  const html =
    '<footer id="footer" role="contentinfo">' +
    '<div class="container">' +
      '<div class="footer-grid">' +

        '<div>' +
          '<div class="footer-logo">' +
            '<img src="' + p + 'assets/VeloxLivingLogo.svg" alt="Velox Living" width="36" height="36" />' +
            '<span class="footer-logo-text">Velox Living</span>' +
          '</div>' +
          '<p class="footer-tagline" data-i18n="footer.tagline">Your eyes and ears on the ground in Târgu Mureș, Transylvania.</p>' +
          '<div class="footer-social">' +
            '<a href="https://www.facebook.com/veloxliving" aria-label="Facebook" rel="noopener">' +
              '<svg fill="currentColor" viewBox="0 0 24 24">' +
                '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' +
              '</svg>' +
            '</a>' +
            '<a href="https://www.instagram.com/veloxliving/" aria-label="Instagram" rel="noopener">' +
              '<svg fill="currentColor" viewBox="0 0 24 24">' +
                '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>' +
              '</svg>' +
            '</a>' +
            '<a href="https://wa.me/40740489588?text=Hello%2C%20I%27m%20interested%20in%20a%20property." aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">' +
              '<svg fill="currentColor" viewBox="0 0 24 24">' +
                '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
                '<path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.552 4.112 1.518 5.84L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.36-.214-3.727.888.905-3.63-.234-.373A9.818 9.818 0 1112 21.818z"/>' +
              '</svg>' +
            '</a>' +
          '</div>' +
        '</div>' +

        '<div class="footer-col">' +
          '<h4 data-i18n="footer.links_heading">Quick Links</h4>' +
          '<ul>' +
            '<li><a href="' + s('properties') + '" data-i18n="nav.properties">Properties</a></li>' +
            '<li><a href="' + s('services')   + '" data-i18n="nav.services">Services</a></li>' +
            '<li><a href="' + s('why-velox')  + '" data-i18n="nav.about">About</a></li>' +
            '<li><a href="' + s('footer')     + '" data-i18n="nav.contact">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="footer-col">' +
          '<h4 data-i18n="footer.contact_heading">Get in Touch</h4>' +
          '<div class="footer-contact-item">' +
            '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">' +
              '<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>' +
              '<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>' +
            '</svg>' +
            '<span>Târgu Mureș, Romania</span>' +
          '</div>' +
          '<div class="footer-contact-item">' +
            '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">' +
              '<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>' +
            '</svg>' +
            '<a href="mailto:living@veloxventures.eu">living@veloxventures.eu</a>' +
          '</div>' +
          '<div class="footer-contact-item">' +
            '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">' +
              '<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>' +
            '</svg>' +
            '<a href="tel:+40740489588">+40740 489 588</a>' +
          '</div>' +
        '</div>' +

      '</div>' +
      '<div class="footer-bottom">' +
        '<span data-i18n="footer.copyright">© 2025 Velox Living. All rights reserved.</span>' +
        '<span data-i18n="footer.made_with">Made with ❤️ in Transylvania</span>' +
      '</div>' +
    '</div>' +
  '</footer>';

  var root = document.getElementById('footer-root');
  if (root) root.outerHTML = html;
}());
