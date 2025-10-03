
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");

    const scrollAmount = 320;

    // Clona os elementos para criar efeito de loop
    const cards = Array.from(carousel.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("clone");
      carousel.appendChild(clone);
    });

    // Reinicia scroll quando chega ao fim
    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });

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
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });
