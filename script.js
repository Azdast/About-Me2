   document.getElementById('year').textContent = new Date().getFullYear();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const siblings = [...e.target.parentElement.querySelectorAll('.fade-up')];
          const idx = siblings.indexOf(e.target);
          e.target.style.transitionDelay = (idx * 80) + 'ms';
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    