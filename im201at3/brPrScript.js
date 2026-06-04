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

  dreamPieces.forEach(function (piece, index) {
    const depth = index * 6;

    piece.style.opacity = progress;

    piece.style.transform = `
      translateZ(${depth}px)
      rotateY(${progress * 720}deg)
      scale(${0.5 + progress})
    `;
  });

  if (progress > 0.95 && sceneChanged === false) {
    sceneChanged = true;

    document.querySelector("#scene1").style.display = "none";
    document.querySelector("#scene2").classList.add("active");
  }
});
