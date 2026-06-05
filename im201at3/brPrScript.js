console.log("Scroll script connected");

let resetTriggered = false;

const pieces = document.querySelectorAll(".piece");
const dreamPieces = document.querySelectorAll(".dreamPiece");

const scene1 = document.querySelector("#scene1");
const scene2 = document.querySelector("#scene2");

function getSectionProgress(section) {
  const rect = section.getBoundingClientRect();
  const progress = -rect.top / (section.offsetHeight - window.innerHeight);
  return Math.min(1, Math.max(0, progress));
}

window.addEventListener("scroll", function () {
  const progress1 = getSectionProgress(scene1);
  const progress2 = getSectionProgress(scene2);

  document.body.style.backgroundColor = `rgb(
  ${9 - progress2 * 7},
  ${34 - progress2 * 1},
  ${34 + progress2 * 7}
  
  )`;
  document.body.style.backgroundSize = `${18 + progress2 * 6}px ${17 + progress2 * 6}px`;

  pieces.forEach(function (piece, index) {
    const returnAmount = Math.min(1, progress2 / 0.45);

    const pieceProgress = progress1 * (1 - returnAmount) + 0.08 * returnAmount;

    const depth = index * 12;
    const rotateAmount = pieceProgress * 360;
    const buildAmount = pieceProgress * index * 4;

    const fadeOutPoint = 0.45;
    const fadeAmount = Math.min(1, progress2 / fadeOutPoint);

    piece.style.opacity = pieceProgress * (1 - fadeAmount);

    piece.style.transform = `
    translateZ(${depth}px)
    translateY(${120 - buildAmount}px)
    rotateX(70deg)
    rotateZ(${rotateAmount + index * 12}deg)
    scale(${0.2 + pieceProgress * 0.9})
  `;
  });

  dreamPieces.forEach(function (piece, index) {
    const middlePeak = Math.sin(progress2 * Math.PI);

    const depth = index * (4 + middlePeak * 8);
    const rotateAmount = progress2 * 720;
    const moveAmount = progress2 * index * 1.5;

    const wideScale = 0.2 + progress2 * 1.2 + middlePeak * 1.4;
    const middleWidth = middlePeak * index * 3;

    piece.style.opacity = progress2;

    piece.style.transform = `
    translateZ(${depth}px)
    translateY(${-150 + moveAmount}px)
    rotateX(${progress2 * 180 + middlePeak * 50}deg)
    rotateY(${rotateAmount + index * 8}deg)
    rotateZ(${middlePeak * 25}deg)
    scale(${wideScale})
  `;
  });

  if (progress2 > 0.99 && !resetTriggered) {
    resetTriggered = true;

    window.scrollTo({
      top: scene1.offsetTop + scene1.offsetHeight * 0.88,
      behavior: "smooth",
    });
  }

  if (progress2 < 0.5) {
    resetTriggered = false;
  }
});
