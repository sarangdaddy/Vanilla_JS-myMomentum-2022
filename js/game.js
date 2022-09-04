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
console.log(balls);

// var a = [1, 2, 3, 4, 5];
// var b = [1, 2, 5];
// b.forEach(function(item) {
// var index = a.indexOf(item);
// if (index !== -1) {
// a.splice(index, 1);
// }
// });

lottoBall.forEach(function (item) {
  var index = balls.indexOf(item);
  if (index !== -1) {
    balls.splice(index, 1); // 시작할 인덱스, 삭제 배열 수
  }
});

console.log(balls);

const serviceBall = [];
while (serviceBall.length < 1) {
  const chosenBall = balls[Math.floor(Math.random() * balls.length)];
  if (serviceBall.indexOf(lottoBall) === -1) {
    serviceBall.push(chosenBall);
  }
}

lottoBall.sort((a, b) => a - b);
console.log(lottoBall);
console.log(serviceBall);
