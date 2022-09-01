const balls = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
];

const ballSpan = document.querySelector(".game");

function getball() {
  const chosenBall = balls[Math.floor(Math.random() * balls.length)];
  ball.innerText = `볼은 ${chosenBall} 입니다.`;
}
const ball = document.createElement("span");
ballSpan.appendChild(ball);

const gameButton = document.querySelector(".gamebutton");
gameButton.addEventListener("click", getball);
