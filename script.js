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

    function handleSubmit() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const status = document.getElementById('form-status');

      if (!name || !email || !msg) {
        status.style.color = '#f08080';
        status.textContent = 'Please fill in all fields.';
        return;
      }

      status.style.color = 'var(--accent2)';
      status.textContent = "✓ Message sent! I'll get back to you soon.";
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
      });
    }, { passive: true });