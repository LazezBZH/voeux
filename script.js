const canvas = document.getElementById("canvas");
const ctx3 = canvas.getContext("2d");

let bgInput = document.getElementById("input-bg");
let yearInput = document.getElementById("input-year");
let line1Input = document.getElementById("input-line1");
let line2Input = document.getElementById("input-line2");
let line3Input = document.getElementById("input-line3");
let line4Input = document.getElementById("input-line4");
let signInput = document.getElementById("input-sign");

let bgColor = bgInput.value;
let yearColor = yearInput.value;
let line1Color = line1Input.value;
let line2Color = line2Input.value;
let line3Color = line3Input.value;
let line4Color = line4Input.value;
let signColor = signInput.value;
let picture = "";

bgInput.addEventListener("input", changeBgColor);
yearInput.addEventListener("input", changeYearColor);
line1Input.addEventListener("input", changeLine1Color);
line2Input.addEventListener("input", changeLine2Color);
line3Input.addEventListener("input", changeLine3Color);
line4Input.addEventListener("input", changeLine4Color);
signInput.addEventListener("input", changeSignColor);

window.addEventListener("load", init);

const pictures = document.getElementById("pictures");

window.addEventListener("load", showPictures);

function showPicture() {
  changeColor();
}
function showPictures() {
  for (let i = 1; i <= 10; i++) {
    pictures.innerHTML += `<img class="picture" src='assets/` + i + `.jpg'>`;
  }
  const allPictures = document.querySelectorAll(".picture");
  console.log(allPictures);
  allPictures.forEach(function (i) {
    i.addEventListener("click", function () {
      console.log(i);
      picture = i;
      showPicture();
    });
  });
}

function changeBgColor(e) {
  bgColor = e.target.value;
  canvas.style.backgroundColor = bgColor;
}
function changeYearColor(e) {
  yearColor = e.target.value;
  changeColor();
}

function changeLine1Color(e) {
  line1Color = e.target.value;
  changeColor();
}
function changeLine2Color(e) {
  line2Color = e.target.value;
  changeColor();
}
function changeLine3Color(e) {
  line3Color = e.target.value;
  changeColor();
}
function changeLine4Color(e) {
  line4Color = e.target.value;
  changeColor();
}
function changeSignColor(e) {
  signColor = e.target.value;
  changeColor();
}
function changeColor() {
  ctx3.clearRect(0, 0, canvas.width, canvas.height);

  ctx3.rotate(-0.75);
  ctx3.font = "bold 20px Verdana, Arial, serif";
  ctx3.strokeStyle = yearColor;
  ctx3.strokeText("2024", 32, 50);
  ctx3.setTransform(1, 0, 0, 1, 0, 0);

  ctx3.font = "bold 15px Verdana, Arial, serif";
  ctx3.fillStyle = line1Color;
  ctx3.textAlign = "center";
  ctx3.fillText("MEILLEURS VOEUX", 130, 50);

  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line2Color;
  ctx3.textAlign = "right";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAA", 210, 80);
  // max 25
  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line3Color;
  ctx3.textAlign = "center";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAABBBBBAAAAA", 150, 100);
  // max 35
  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line4Color;
  ctx3.textAlign = "center";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAABBBBBAAAAA", 150, 120);
  // max 35

  ctx3.font = "bold 18px Verdana, Arial, serif";
  ctx3.fillStyle = signColor;
  ctx3.textAlign = "right";
  ctx3.fillText("signature", 295, 140);

  if (picture) {
    ctx3.drawImage(picture, 215, 5, 80, 80);
  }
}
function init() {
  canvas.style.backgroundColor = bgColor;

  ctx3.clearRect(0, 0, canvas.width, canvas.height);

  ctx3.rotate(-0.75);
  ctx3.font = "bold 20px Verdana, Arial, serif";
  ctx3.strokeStyle = yearColor;
  ctx3.strokeText("2024", -25, 50);
  ctx3.setTransform(1, 0, 0, 1, 0, 0);

  ctx3.font = "bold 15px Verdana, Arial, serif";
  ctx3.fillStyle = line1Color;
  ctx3.textAlign = "center";
  ctx3.fillText("MEILLEURS VOEUX", 130, 50);

  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line2Color;
  ctx3.textAlign = "right";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAA", 210, 80);
  // max 25
  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line3Color;
  ctx3.textAlign = "center";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAABBBBBAAAAA", 150, 100);
  // max 35
  ctx3.font = "bold 10px Verdana, Arial, serif";
  ctx3.fillStyle = line4Color;
  ctx3.textAlign = "center";
  ctx3.fillText("AAAAABBBBBAAAAABBBBBAAAAABBBBBAAAAA", 150, 120);
  // max 35
  ctx3.font = "bold 18px Verdana, Arial, serif";
  ctx3.fillStyle = signColor;
  ctx3.textAlign = "right";
  ctx3.fillText("signature", 295, 140);
}