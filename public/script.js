document.getElementById('year').textContent = new Date().getFullYear();

    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('active');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
