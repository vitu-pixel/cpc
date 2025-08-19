// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in effect
  document.body.style.opacity = '1';
  
  // Add click handler for all internal links
  document.querySelectorAll('a[href^=""]').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('http')) return;
      
      e.preventDefault();
      document.body.style.opacity = '0';
      
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    });
  });
  
  // Mobile menu toggle
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });
});
// Back to Top Button
window.addEventListener('scroll', function() {
  const backToTopBtn = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');

});
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  overlay.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close menu when clicking a link
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Leader Rotation
  function rotateLeaders() {
    const leaders = document.querySelectorAll('.leader-card');
    if (leaders.length > 0) {
      let currentActive = document.querySelector('.leader-card.active');
      
      if (currentActive) {
        currentActive.classList.remove('active');
        
        if (currentActive.nextElementSibling) {
          currentActive.nextElementSibling.classList.add('active');
        } else {
          leaders[0].classList.add('active');
        }
      }
    }
  }

  // Rotate every 5 seconds if on leadership page
  if (document.querySelector('.leader-card')) {
    setInterval(rotateLeaders, 5000);
  }
});
