/* Ismaili Tech Angels — light interactions, motion used sparingly */
(function () {
  'use strict';

  /* ---- Sticky nav: solidify after leaving the hero ---- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 60) {
      nav.classList.add('is-stuck');
    } else {
      nav.classList.remove('is-stuck');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Scroll reveal via IntersectionObserver ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      // Stagger siblings within a group for a gentle cascade
      var siblings = Array.prototype.slice.call(
        el.parentNode.querySelectorAll(':scope > .reveal')
      );
      var idx = siblings.indexOf(el);
      el.style.transitionDelay = (idx > 0 ? Math.min(idx, 4) * 90 : 0) + 'ms';
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
