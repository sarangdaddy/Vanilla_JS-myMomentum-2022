const playButton = document.querySelector(".gamebutton");
const resultLotto = document.querySelector(".result__lotto");
const resultService = document.querySelector(".result__service");

function playgame() {
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
  const lottoBall = [];
  while (lottoBall.length < 6) {
    const chosenBall = balls[Math.floor(Math.random() * balls.length)];
    if (lottoBall.indexOf(chosenBall) === -1) {
      lottoBall.push(chosenBall);
    }
  }

  lottoBall.sort((a, b) => a - b);
  resultLotto.innerText = `로또 번호는 ${lottoBall} 입니다.`;

  serviceGame(lottoBall);
}

function serviceGame(lottoBall) {
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
  const serviceBall = [];
  lottoBall.forEach(function (item) {
    var index = balls.indexOf(item);
    if (index !== -1) {
      balls.splice(index, 1); // 시작할 인덱스, 삭제 배열 수
    }
  });

  while (serviceBall.length < 1) {
    const chosenBall = balls[Math.floor(Math.random() * balls.length)];
    if (serviceBall.indexOf(lottoBall) === -1) {
      serviceBall.push(chosenBall);
    }
  }

  resultService.innerText = `서비스 번호는 ${serviceBall} 입니다.`;
}

playButton.addEventListener("click", playgame);
