 // ==== GREY-TO-GREEN_ARROW: makes arrow on _services_
 // ==== section green if the mouse on the service row.
 // ==== and also again gray if mause was waped away
document.addEventListener("DOMContentLoaded", () => {
const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const arrow = row.querySelector('.arrow_icon');
        if (!arrow) return; 

        const grey = arrow.dataset.grey;
        const green = arrow.dataset.green;

        row.addEventListener('mouseenter', () => {
            arrow.src = green;
        });

        row.addEventListener('mouseleave', () => {
            arrow.src = grey;
        });
    });
});

// ==== FAQ: Amswer appearing on question hovering
// ==== with anime.js typing animation
document.addEventListener('DOMContentLoaded', () => {
  function typewriterEffect(element) {
    const text = element.dataset.originalText || element.textContent;
    element.dataset.originalText = text;
    anime.remove(element.querySelectorAll('.char'));
    
    element.innerHTML = '';
    text.split(' ').forEach((word, wi) => {
      const w = document.createElement('span');
      w.className = 'word';
      word.split('').forEach(ch => {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        w.appendChild(c);
      });
      element.appendChild(w);
      if (wi < text.split(' ').length - 1) {
        const sp = document.createElement('span');
        sp.className = 'space';
        sp.innerHTML = '&nbsp;';
        element.appendChild(sp);
      }
    });

    anime.timeline({ 
      targets: element.querySelectorAll('.char'),
      easing: 'linear',
      delay: anime.stagger(30)
    }).add({
      opacity: [0, 1],
      duration: 30
    });
  }

  document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('mouseenter', () => {
      const idx = q.dataset.index;
      document.querySelectorAll('.answer').forEach(a => a.classList.remove('active'));
      const ans = document.querySelector(`.answer[data-index="${idx}"]`);
      if (ans) {
        ans.classList.add('active');
        typewriterEffect(ans);
      }
    });
  });

  document.querySelector('.left_container')
          .addEventListener('mouseleave', () => {
    document.querySelectorAll('.answer').forEach(a => a.classList.remove('active'));
  });
});

// ==== PHONE_NUMBER_VALIDATION: on _contact_ section.
  const phoneInput = document.getElementById("phoneInput");
  const sendButton = document.getElementById("sendButton");
  const phoneError = document.getElementById("phoneError");

  sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^\+?\d{10,15}$/;

    if (phoneRegex.test(phoneValue)) {
      phoneError.textContent = "";
      phoneError.classList.remove("visible");
    } else {
      phoneError.textContent = "Please enter a valid phone number.";
      phoneError.classList.add("visible");
    }
});


window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled'); 
  }
});


// ==== LOGO:HOVER: video show
const logo = document.querySelector('.logo_convert');
const videoOverlay = document.querySelector('.tattoo-video-overlay');

logo.addEventListener('mouseover', () => {
videoOverlay.style.opacity = '1';
videoOverlay.style.pointerEvents = 'auto';
});

logo.addEventListener('mouseout', () => {
videoOverlay.style.opacity = '0';
videoOverlay.style.pointerEvents = 'none';
});


// ==== line animation

const aboutRow = document.querySelector('.about_row');
const borderPath = document.querySelector('.border-path');

function getPerimeter(element) {
    const rect = element.getBoundingClientRect();
    return 2 * (rect.width + rect.height); 
}

anime({
    targets: borderPath,
    strokeDasharray: getPerimeter(aboutRow), 
    strokeDashoffset: [anime.setDashoffset, 0], 
    duration: 10000, 
    loop: true,
    easing: 'linear', 
});

// ==== PHONE NUMBER VALIDATION

sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^\+?\d{10,15}$/;

    if (phoneRegex.test(phoneValue)) {
    phoneError.textContent = "";
    phoneError.classList.remove("visible");
    } else {
    phoneError.textContent = "Please enter a valid phone number.";
    phoneError.classList.add("visible");
    }
});

// =====================================
document.addEventListener('DOMContentLoaded', () => {
  const artistInfo = document.querySelector('.artist_info');
  const bookCover = document.querySelector('.book_cover');

// ==== smooth link's disappearing
  artistInfo.addEventListener('mouseenter', () => {
      bookCover.style.opacity = '1';
      bookCover.style.visibility = 'visible';
  });

  artistInfo.addEventListener('mouseleave', () => {
      bookCover.style.transition = 'none';
      bookCover.style.opacity = '0';
      bookCover.style.visibility = 'hidden';
      
      requestAnimationFrame(() => {
          bookCover.style.transition = '';
      });
  });
});


// ===== Smooth appearing images in services on hovering
const rows = document.querySelectorAll('.row');
const images = document.querySelectorAll('.cover_service_images');

  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      const svc = row.dataset.service;
      images.forEach(wrap => {
        wrap.classList.toggle('active', wrap.dataset.service === svc);
      });
    });
    row.addEventListener('mouseleave', () => {
      images.forEach(wrap => wrap.classList.remove('active'));
    });
});


// ==== NAV: hidden animation on scroll
  const nav = document.querySelector("nav");
  const hero = document.getElementById("hero");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (currentScrollY < heroBottom) {
      nav.style.transform = "translateY(0)";
      return;
    }

    if (currentScrollY > lastScrollY) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }
    lastScrollY = currentScrollY;
  });

