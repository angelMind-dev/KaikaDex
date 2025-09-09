  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('escondido');
        entry.target.classList.add('animar');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.wiki').forEach(section => {
    observer.observe(section);
  });