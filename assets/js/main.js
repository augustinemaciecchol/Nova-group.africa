// Quantum Synergy Limited — site interactions
(function () {
  'use strict';

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Division tabs */
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(name) {
    tabButtons.forEach(function (btn) {
      var isActive = btn.dataset.tab === name;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    tabPanels.forEach(function (panel) {
      var isActive = panel.id === name;
      panel.classList.toggle('active', isActive);
      panel.hidden = !isActive;
    });
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activateTab(btn.dataset.tab);
    });
  });

  /* Header background on scroll */
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(10, 27, 44, 0.92)';
    } else {
      header.style.background = 'rgba(10, 27, 44, 0.65)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Reveal-on-scroll for cards/sections */
  var revealTargets = document.querySelectorAll('.card, .board-card, .council-card, .edge-card, .csr-card, .about-item');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      io.observe(el);
    });
  }
})();
