console.log("Scroll script connected");
const pieces = document.querySelectorAll(".piece");

window.addEventListener("scroll", function () {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = window.scrollY / maxScroll;

  pieces.forEach(function (piece, index) {
    const depth = index * 12;
    const rotateAmount = progress * 360;
    const buildAmount = progress * index * 4;

    piece.style.opacity = progress;

    piece.style.transform = `
      translateZ(${depth}px)
      translateY(${120 - buildAmount}px)
      rotateX(70deg)
      rotateZ(${rotateAmount + index * 12}deg)
      scale(${0.2 + progress * 0.9})
    `;
  });
});
