/* ============================================================
   Bijak Baca Kids — Main JavaScript
   Kelas Fonik BM untuk kanak-kanak 4-7 tahun di Cheras
   ============================================================ */

(function () {
  'use strict';

  // -----------------------------------------------------------
  // 1. DOM REFERENCES
  // -----------------------------------------------------------
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const faqItems   = document.querySelectorAll('.faq-item');
  const testimoniGrid = document.getElementById('testimoniGrid');
  const testimoniToggle = document.getElementById('testimoniToggle');
  const lightbox   = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const teknikImgLink = document.querySelector('.teknik-img-link');

  let menuOpen = false;

  // -----------------------------------------------------------
  // 2. NAVBAR SCROLL SHADOW
  // -----------------------------------------------------------
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // -----------------------------------------------------------
  // 3. MOBILE MENU TOGGLE
  // -----------------------------------------------------------
  function openMenu() {
    menuOpen = true;
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // -----------------------------------------------------------
  // 4. FAQ ACCORDION
  // -----------------------------------------------------------
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all items first
      faqItems.forEach(function (faq) {
        faq.classList.remove('open');
      });

      // Toggle the clicked one
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // -----------------------------------------------------------
  // 5. ACTIVE NAV LINK HIGHLIGHTING (Intersection Observer)
  // -----------------------------------------------------------
  (function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + id
              );
            });
          }
        });
      },
      { root: null, threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  })();

  // -----------------------------------------------------------
  // 6. SCROLL REVEAL ANIMATION
  // -----------------------------------------------------------
  (function () {
    if (!('IntersectionObserver' in window)) return;

    const revealElements = document.querySelectorAll(
      '.problem-card, .kaedah-card, .program-card, .testimoni-card, .tentang-stat'
    );

    revealElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  })();

  // -----------------------------------------------------------
  // 7. TESTIMONI "SHOW MORE" TOGGLE
  // -----------------------------------------------------------
  testimoniToggle.addEventListener('click', function () {
    const isCollapsed = testimoniGrid.classList.contains('collapsed');

    if (isCollapsed) {
      testimoniGrid.classList.remove('collapsed');
      testimoniToggle.textContent = 'Tutup Testimoni';
    } else {
      testimoniGrid.classList.add('collapsed');
      testimoniToggle.textContent = 'Lihat Lagi Testimoni';
      // Scroll back to testimoni section
      document.getElementById('testimoni').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // -----------------------------------------------------------
  // 8. LIGHTBOX
  // -----------------------------------------------------------
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Teknik Bayangan image click
  if (teknikImgLink) {
    teknikImgLink.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = this.querySelector('img').getAttribute('src');
      openLightbox(imgSrc);
    });
  }

  // Close button inside lightbox
  const lbCloseBtn = lightbox.querySelector('.lb-close');
  if (lbCloseBtn) {
    lbCloseBtn.addEventListener('click', closeLightbox);
  }

  // Click outside image to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Esc key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

})();
