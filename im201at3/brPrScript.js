console.log("Scroll script connected");

let sceneChanged = false;

const pieces = document.querySelectorAll(".piece");
const dreamPieces = document.querySelectorAll(".dreamPiece");

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

  const dreamProgress = Math.min(1, Math.max(0, (progress - 0.95) / 0.05));

  dreamPieces.forEach(function (piece, index) {
    const depth = index * 40;
    const rotateAmount = dreamProgress * 720;
    const moveAmount = dreamProgress * index * 60;

    piece.style.opacity = dreamProgress;

    piece.style.transform = `
    translateZ(${depth}px)
    translateY(${-200 + moveAmount}px)
    rotateX(${dreamProgress * 180}deg)
    rotateY(${rotateAmount + index * 45}deg)
    scale(${0.2 + dreamProgress * 1.5})
  `;
  });

  if (progress > 0.69 && sceneChanged === false) {
    sceneChanged = true;

    document.querySelector("#scene1").style.opacity = "0";
    document.querySelector("#scene2").classList.add("active");
  }
});
