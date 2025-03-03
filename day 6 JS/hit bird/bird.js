const gameArea = document.getElementById("gameArea");
const bird = document.getElementById("bird");
const scoreElement = document.getElementById("scoreValue");
let score = 0;
let birdDirection = 1;
let birdSpeed = 3;

let birdX = 0;
let birdY = Math.random() * (gameArea.offsetHeight - 60);
bird.style.left = birdX + "px";
bird.style.top = birdY + "px";

function moveBird() {
  birdX += birdSpeed * birdDirection;

  if (birdX > gameArea.offsetWidth - 60) {
    birdDirection = -1;
    bird.style.transform = "scaleX(-1)";
  } else if (birdX < 0) {
    birdDirection = 1;
    bird.style.transform = "scaleX(1)";
  }

  birdY += (Math.random() - 0.5) * 2;
  birdY = Math.max(0, Math.min(gameArea.offsetHeight - 60, birdY));

  bird.style.left = birdX + "px";
  bird.style.top = birdY + "px";
}

function shoot(e) {
  const rect = gameArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const bullet = document.createElement("div");
  bullet.className = "bullet";
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  gameArea.appendChild(bullet);

  const birdRect = bird.getBoundingClientRect();
  const gameRect = gameArea.getBoundingClientRect();
  const birdX = birdRect.left - gameRect.left;
  const birdY = birdRect.top - gameRect.top;

  if (x >= birdX && x <= birdX + 60 && y >= birdY && y <= birdY + 60) {
    score += 10;
    scoreElement.textContent = score;
    birdSpeed += 0.5;
  }

  setTimeout(() => {
    bullet.remove();
  }, 100);
}

gameArea.addEventListener("click", shoot);

setInterval(moveBird, 20);
