/* Olímpicas Sport — interacciones
   1. Menú móvil accesible
   2. Pestaña activa según la sección visible
   3. «Se cose al llegar»: el pespunte de cada pieza se dibuja al entrar en pantalla
   4. Año del pie de página */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- 1. Menú móvil ---------- */
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  var desktop = window.matchMedia('(min-width: 64em)');

  function setMenu(open, returnFocus) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    var label = toggle.querySelector('span');
    if (label) label.textContent = open ? 'Cerrar' : 'Menú';
    var use = toggle.querySelector('use');
    if (use) use.setAttribute('href', open ? '#i-close' : '#i-menu');
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true', false);
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false, false);
      else if (event.target === menu) setMenu(false, true);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    // Mantiene el foco dentro del menú abierto
    menu.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab') return;
      var items = menu.querySelectorAll('a');
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); toggle.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); toggle.focus(); }
    });
    desktop.addEventListener('change', function (e) { if (e.matches) setMenu(false, false); });
  }

  /* ---------- 2. Pestaña activa ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  // «Cómo trabajamos» y diferenciadores pertenecen a Sectores en la navegación; el contacto, a Contacto.
  var sectionMap = { inicio: 'inicio', nosotros: 'nosotros', soluciones: 'soluciones', sectores: 'sectores', proceso: 'sectores', contacto: 'contacto' };

  function setActive(id) {
    var target = sectionMap[id];
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + target) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(sectionMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ---------- 3. Se cose al llegar ---------- */
  var pieces = document.querySelectorAll('.patch, .seam-steps');
  pieces.forEach(function (el) { el.setAttribute('data-sew', ''); });

  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    var sewer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-sewn');
        sewer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    pieces.forEach(function (el) { sewer.observe(el); });
  } else {
    pieces.forEach(function (el) { el.classList.add('is-sewn'); });
  }

  /* ---------- 4. Año ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  root.classList.add('is-ready');
})();
