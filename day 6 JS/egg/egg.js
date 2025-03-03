const egg = document.getElementById("egg");
const brokenEgg = document.getElementById("broken_egg");
const basket = document.getElementById("basket");
const totalEggCountDisplay = document.getElementById('totalEggCount');
let eggFallingSpeed = 4; 
let eggsInBasket = 0;

egg.style.left = Math.random() * (window.innerWidth - 50) + "px";

document.addEventListener("mousemove", (e) => {
  const basketWidth = basket.offsetWidth;
  const mouseX = e.clientX;

  if (mouseX >= 0 && mouseX <= window.innerWidth - basketWidth) {
    basket.style.left = mouseX + "px";
  }
});

function dropEgg() {
  const eggRect = egg.getBoundingClientRect();
  const basketRect = basket.getBoundingClientRect();

  if (eggRect.top + eggRect.height >= window.innerHeight) {

    egg.style.display = "none";
    brokenEgg.style.display = "block";
    brokenEgg.style.left = egg.style.left;
    brokenEgg.style.top = (window.innerHeight - 50) + "px";
    eggsInBasket = 0; 
    totalEggCountDisplay.textContent = eggsInBasket;

    setTimeout(resetEgg, 1000);

  } else if (
    eggRect.bottom >= basketRect.top &&
    eggRect.left >= basketRect.left &&
    eggRect.right <= basketRect.right
  ) {
    eggsInBasket++;
    totalEggCountDisplay.textContent = eggsInBasket;

    eggFallingSpeed += 1; 
    resetEgg();
  } else {
    egg.style.top = egg.offsetTop + eggFallingSpeed + "px";
    requestAnimationFrame(dropEgg);
  }
}

function resetEgg() {
  egg.style.top = "0px";
  egg.style.left = Math.random() * (window.innerWidth - 50) + "px";
  egg.style.display = "block";
  brokenEgg.style.display = "none";
  requestAnimationFrame(dropEgg);
}

resetEgg();
