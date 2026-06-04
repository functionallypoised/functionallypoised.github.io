const pieces = document.querySelectorAll(".piece");

window.addEventListener("scroll", function () {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = window.scrollY / maxScroll;

  pieces.forEach(function (piece, index) {
    const depth = index * 35;
    const rotateAmount = progress * 360;
    const buildAmount = progress * index * 40;

    piece.style.opacity = progress;

    piece.style.transform = `
      translateZ(${depth}px)
      translateY(${100 - buildAmount}px)
      rotateX(70deg)
      rotateZ(${rotateAmount + index * 25}deg)
      scale(${0.4 + progress * 0.8})
    `;
  });
});
