const bgColors = [
  "#81d4fa",
  "#80DEEA",
  "#80CBC4",
  "#B39DDB",
  "#F48FB1",
  "#E1BEE7",
  "#D7CCC8",
];

const setBgColor = document.body;
const logoutColor = document.querySelector(".logout_button");

function getBgColor() {
  const chosenImage = bgColors[Math.floor(Math.random() * bgColors.length)];
  setBgColor.style.background = `${chosenImage}`;
  logoutColor.style.color = `${chosenImage}`;
}

getBgColor();
