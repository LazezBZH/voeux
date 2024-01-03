const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let bgInput = document.getElementById("input-bg");
let yearInput = document.getElementById("input-year");
let line1Input = document.getElementById("input-line1");
let line1TextInput = document.getElementById("title");
let line2Input = document.getElementById("input-line2");
let line2TextInput = document.getElementById("text-line2");
let line3Input = document.getElementById("input-line3");
let line3TextInput = document.getElementById("text-line3");
let line4Input = document.getElementById("input-line4");
let line4TextInput = document.getElementById("text-line4");
let signInput = document.getElementById("input-sign");
let signTextInput = document.getElementById("text-sign");

let bgColor = bgInput.value;
let yearColor = yearInput.value;
let line1Color = line1Input.value;
let line1Text = "";
let line2Color = line2Input.value;
let line2Text = "";
let line3Color = line3Input.value;
let line3Text = "";
let line4Color = line4Input.value;
let line4Text = "";
let signColor = signInput.value;
let signText = "";
let picture = "";

bgInput.addEventListener("input", changeBgColor);
yearInput.addEventListener("input", changeYearColor);
line1Input.addEventListener("input", changeLine1Color);
line2Input.addEventListener("input", changeLine2Color);
line3Input.addEventListener("input", changeLine3Color);
line4Input.addEventListener("input", changeLine4Color);
signInput.addEventListener("input", changeSignColor);
line1TextInput.addEventListener("click", changeLine1Text);
line2TextInput.addEventListener("input", changeLine2Text);
line3TextInput.addEventListener("input", changeLine3Text);
line4TextInput.addEventListener("input", changeLine4Text);
signTextInput.addEventListener("input", changeSignText);
window.addEventListener("click", setTexts);

window.addEventListener("load", init);

const pictures = document.getElementById("pictures");

window.addEventListener("load", showPictures);

function showPicture() {
  changCanvas();
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
  changCanvas();
}

function setTexts() {
  changCanvas();
}
function changeLine1Text(e) {
  line1Text = e.target.value;
  changCanvas();
}
function changeLine2Text(e) {
  line2Text = e.target.value;
  changCanvas();
}
function changeLine3Text(e) {
  line3Text = e.target.value;
  changCanvas();
}
function changeLine4Text(e) {
  line4Text = e.target.value;
  changCanvas();
}
function changeSignText(e) {
  signText = e.target.value;
  changCanvas();
}

function changeYearColor(e) {
  yearColor = e.target.value;
  changCanvas();
}

function changeLine1Color(e) {
  line1Color = e.target.value;
  changCanvas();
}
function changeLine2Color(e) {
  line2Color = e.target.value;
  changCanvas();
}
function changeLine3Color(e) {
  line3Color = e.target.value;
  changCanvas();
}
function changeLine4Color(e) {
  line4Color = e.target.value;
  changCanvas();
}
function changeSignColor(e) {
  signColor = e.target.value;
  changCanvas();
}
function changCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.rotate(-0.75);
  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.strokeStyle = yearColor;
  ctx.strokeText("2024", 32, 50);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.font = "bold 15px Verdana, Arial, serif";
  ctx.fillStyle = line1Color;
  ctx.textAlign = "center";
  ctx.fillText(line1Text, 130, 50);

  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line2Color;
  ctx.textAlign = "right";
  ctx.fillText(line2Text, 210, 80);
  // max 25
  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line3Color;
  ctx.textAlign = "center";
  ctx.fillText(line3Text, 150, 100);
  // max 35
  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line4Color;
  ctx.textAlign = "center";
  ctx.fillText(line4Text, 150, 120);
  // max 35

  ctx.font = "bold 18px Verdana, Arial, serif";
  ctx.fillStyle = signColor;
  ctx.textAlign = "right";
  ctx.fillText(signText, 295, 140);

  if (picture) {
    ctx.drawImage(picture, 215, 5, 80, 80);
  }
}
function init() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.rotate(-0.75);
  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.strokeStyle = yearColor;
  ctx.strokeText("2024", -25, 50);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.font = "bold 15px Verdana, Arial, serif";
  ctx.fillStyle = line1Color;
  ctx.textAlign = "center";
  ctx.fillText(line1Text, 130, 50);

  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line2Color;
  ctx.textAlign = "right";
  ctx.fillText(line2Text, 210, 80);
  // max 25
  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line3Color;
  ctx.textAlign = "center";
  ctx.fillText(line3Text, 150, 100);
  // max 35
  ctx.font = "bold 10px Verdana, Arial, serif";
  ctx.fillStyle = line4Color;
  ctx.textAlign = "center";
  ctx.fillText(line4Text, 150, 120);
  // max 35
  ctx.font = "bold 18px Verdana, Arial, serif";
  ctx.fillStyle = signColor;
  ctx.textAlign = "right";
  ctx.fillText(signText, 295, 140);
}

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", saveImage);

function downloadImg() {
  const dataURL = canvas.toDataURL("image/jpeg", 1.0);
  console.log(dataURL);
}

function saveImage() {
  const nomFile = "image.jpeg";

  let dataImage;

  const lien = document.createElement("a");

  // récup. des data de l'image
  dataImage = canvas.toDataURL("image/jpeg", 1.0);
  // affectation d'un nom à l'image
  lien.download = nomFile;
  // modifie le type de données
  dataImage = dataImage.replace("image/jpeg", "image/octet-stream");
  // affectation de l'adresse
  lien.href = dataImage;
  // ajout de l'élément
  document.body.appendChild(lien);
  // simulation du click
  lien.click();
  // suppression de l'élément devenu inutile
  document.body.removeChild(lien);
}
