const clock = document.querySelector(".clock");
const today = document.querySelector(".today");

function nowTime() {
  const date = new Date();
  const nowHour = String(date.getHours()).padStart(2, "0");
  const nowMin = String(date.getMinutes()).padStart(2, "0");
  const nowSec = String(date.getSeconds()).padStart(2, "0");

  if (nowHour >= 13) {
    clock.innerText = `PM ${nowHour - 12}:${nowMin}:${nowSec}`;
  } else {
    clock.innerText = `AM ${nowHour}:${nowMin}:${nowSec}`;
  }
}

nowTime();
setInterval(nowTime, 1000);

function nowDay() {
  const newDate = new Date();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const weekday = new Array(7);
  weekday[0] = "일요일";
  weekday[1] = "월요일";
  weekday[2] = "화요일";
  weekday[3] = "수요일";
  weekday[4] = "목요일";
  weekday[5] = "금요일";
  weekday[6] = "토요일";
  const day = weekday[newDate.getDay()];
  today.innerText = `${month + 1}월 ${date}일 ${day}`;
}

nowDay();
