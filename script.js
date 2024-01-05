const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 360;

const bgInput = document.getElementById("input-bg");
const yearInput = document.getElementById("input-year");
const line1Input = document.getElementById("input-line1");
const line1TextInput = document.getElementById("title");
const line2Input = document.getElementById("input-line2");
const line2TextInput = document.getElementById("text-line2");
const line3Input = document.getElementById("input-line3");
const line3TextInput = document.getElementById("text-line3");
const line4Input = document.getElementById("input-line4");
const line4TextInput = document.getElementById("text-line4");
const signInput = document.getElementById("input-sign");
const signTextInput = document.getElementById("text-sign");
const pictureInit = document.querySelector(".pictureInit");
const pictures = document.getElementById("pictures");
const resetBtn = document.querySelector(".reset-btn");

let bgColor = bgInput.value;
let yearColor = yearInput.value;
let line1Color = line1Input.value;
let line1Text = "Titre";
let line2Color = line2Input.value;
let line2Text = "Ligne 2";
let line3Color = line3Input.value;
let line3Text = "Ligne 3";
let line4Color = line4Input.value;
let line4Text = "Ligne 4";
let signColor = signInput.value;
let signText = "Signature";
let picture = "";

bgInput.addEventListener("input", changeBgColor);
yearInput.addEventListener("input", changeYearColor);
line1Input.addEventListener("input", changeLine1Color);
line2Input.addEventListener("input", changeLine2Color);
line3Input.addEventListener("input", changeLine3Color);
line4Input.addEventListener("input", changeLine4Color);
signInput.addEventListener("input", changeSignColor);
line1TextInput.addEventListener("input", changeLine1Text);
line1TextInput.addEventListener("click", changeLine1Text);
line2TextInput.addEventListener("input", changeLine2Text);
line2TextInput.addEventListener("click", changeLine2Text);
line3TextInput.addEventListener("input", changeLine3Text);
line3TextInput.addEventListener("click", changeLine3Text);
line4TextInput.addEventListener("input", changeLine4Text);
line4TextInput.addEventListener("click", changeLine4Text);
signTextInput.addEventListener("input", changeSignText);
signTextInput.addEventListener("click", changeSignText);
resetBtn.addEventListener("click", reset);

window.addEventListener("click", setTexts);
window.addEventListener("load", init);
window.addEventListener("load", showPictures);

// generate and choice pictures
function showPicture() {
  changeCanvas();
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

// write textes
function setTexts() {
  changeCanvas();
}

function changeLine1Text(e) {
  line1Text = e.target.value;
  changeCanvas();
}

function changeLine2Text(e) {
  line2Text = e.target.value;
  changeCanvas();
}
function changeLine3Text(e) {
  line3Text = e.target.value;
  changeCanvas();
}

function changeLine4Text(e) {
  line4Text = e.target.value;
  changeCanvas();
}

function changeSignText(e) {
  signText = e.target.value;
  changeCanvas();
}

// change colors
function changeBgColor(e) {
  bgColor = e.target.value;
  changeCanvas();
}

function changeYearColor(e) {
  yearColor = e.target.value;
  changeCanvas();
}

function changeLine1Color(e) {
  line1Color = e.target.value;
  changeCanvas();
}

function changeLine2Color(e) {
  line2Color = e.target.value;
  changeCanvas();
}

function changeLine3Color(e) {
  line3Color = e.target.value;
  changeCanvas();
}

function changeLine4Color(e) {
  line4Color = e.target.value;
  changeCanvas();
}

function changeSignColor(e) {
  signColor = e.target.value;
  changeCanvas();
}

// main function to personnalize canvas
function changeCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.rotate(-0.75);
  ctx.font = "bold 40px Verdana, Arial, serif";
  ctx.strokeStyle = yearColor;
  ctx.strokeText("2024", 64, 100);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.font = "bold 40px Verdana, Arial, serif";
  ctx.fillStyle = line1Color;
  ctx.textAlign = "center";
  ctx.fillText(line1Text, 320, 100);

  ctx.font = "bold 24px Verdana, Arial, serif";
  ctx.fillStyle = line2Color;
  ctx.textAlign = "right";
  ctx.fillText(line2Text, 520, 160);

  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.fillStyle = line3Color;
  ctx.textAlign = "center";
  ctx.fillText(line3Text, 360, 230);

  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.fillStyle = line4Color;
  ctx.textAlign = "center";
  ctx.fillText(line4Text, 360, 280);

  ctx.font = "bold 24px Verdana, Arial, serif";
  ctx.fillStyle = signColor;
  ctx.textAlign = "right";
  ctx.fillText(signText, 700, 340);

  if (picture) {
    ctx.drawImage(picture, 550, 10, 160, 160);
  } else ctx.drawImage(pictureInit, 550, 10, 160, 160);
}

// init canvas model
function init() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.rotate(-0.75);
  ctx.font = "bold 40px Verdana, Arial, serif";
  ctx.strokeStyle = yearColor;
  ctx.strokeText("2024", -50, 100);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.font = "bold 40px Verdana, Arial, serif";
  ctx.fillStyle = line1Color;
  ctx.textAlign = "center";
  ctx.fillText(line1Text, 320, 100);

  ctx.font = "bold 24px Verdana, Arial, serif";
  ctx.fillStyle = line2Color;
  ctx.textAlign = "right";
  ctx.fillText(line2Text, 520, 160);

  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.fillStyle = line3Color;
  ctx.textAlign = "center";
  ctx.fillText(line3Text, 360, 230);

  ctx.font = "bold 20px Verdana, Arial, serif";
  ctx.fillStyle = line4Color;
  ctx.textAlign = "center";
  ctx.fillText(line4Text, 360, 280);

  ctx.font = "bold 24px Verdana, Arial, serif";
  ctx.fillStyle = signColor;
  ctx.textAlign = "right";
  ctx.fillText(signText, 700, 340);

  ctx.drawImage(pictureInit, 530, 10, 180, 180);
}

// download generated picture
const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", saveImage);

function saveImage() {
  const fileName = "image.jpeg";
  let dataImage;
  // create link
  const link = document.createElement("a");
  // get image's data
  dataImage = canvas.toDataURL("image/jpeg", 1.0);
  // name image
  link.download = fileName;
  // modify type
  dataImage = dataImage.replace("image/jpeg", "image/octet-stream");
  // set image's data to the link
  link.href = dataImage;
  // add picture in body
  document.body.appendChild(link);
  // simulate click
  link.click();
  // delate link
  document.body.removeChild(link);
}

function reset() {
  bgColor = bgInput.defaultValue;
  yearColor = yearInput.defaultValue;
  line1Color = line1Input.defaultValue;
  line1Text = "Titre";
  line2Color = line2Input.defaultValue;
  line2Text = "Ligne 2";
  line3Color = line3Input.defaultValue;
  line3Text = "Ligne 3";
  line4Color = line4Input.defaultValue;
  line4Text = "Ligne 4";
  signColor = signInput.defaultValue;
  signText = "Signature";
  picture = "";
}
