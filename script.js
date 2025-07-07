// Confetti using https://www.kirilv.com/canvas-confetti/
const confetti = (function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
    script.onload = () => {
      setInterval(() => {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 2000);
    };
    document.head.appendChild(script);
  })();
    
  // Slideshow
  let current = 0;
  const slides = document.querySelectorAll(".slide");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
    });
  }
  
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);
  