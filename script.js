
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");

    const cardWidth = document.querySelector(".card").offsetWidth + 20;

    // Clona os elementos para criar efeito de loop
    const cards = Array.from(carousel.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      carousel.appendChild(clone);
    });

    // Reinicia scroll quando chega ao fim
    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }, 300); // espera a animação terminar
    });

    leftBtn.addEventListener("click", () => {
      if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth / 2;
      }
      carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
  });

  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = ["0", "1"];
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });