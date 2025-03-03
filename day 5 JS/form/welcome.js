let params = new URLSearchParams(window.location.search);

let name = params.get("name");
let age = params.get("age");
let gender = params.get("gender");
let color = params.get("color");

let wlcomeImg = document.getElementById("img");
let welcomeMessage = document.getElementById("welcomeMessage");

if (gender === 'Male') {

  wlcomeImg.src = 'images/man.png';
  welcomeMessage.innerHTML = `Welcome <span id="colorName">   ${name}   </span>`;
  
} else {

  welcomeMessage.innerHTML = `Welcome <span id="colorName">   ${name}   </span>`;
  wlcomeImg.src = 'images/girl.png';

}
let colorName = document.getElementById("colorName"); 
colorName.style.color = color;