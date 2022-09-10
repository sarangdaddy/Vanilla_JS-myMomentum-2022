const quotes = [
  {
    quote:
      "적당하게 일하고 좀 더 느긋하게 쉬어라. 현명한 사람은 느긋하게 인생을 보냄으로써 진정한 행복을 누리는 것이다.",
    author: "- 그라시안",
  },
  {
    quote:
      "근로는 매일을 풍부하게 하며 휴식은 피곤한 나날을 더욱 값있게 한다. 뿐만 아니라 근로 뒤의 휴식은 높은 환희 에 감사를 불러일으킨다.",
    author: "- 보들레르",
  },
  {
    quote:
      "낮의 일은 낮의 일일 뿐, 그 이상도 이하도 아니다. 그것을 지키는 사람은 그 사람이 농부이건 화가이건 낮의 양식과 밤의 휴식 그리고 여가를 필요로 한다.",
    author: "- 조지 버나드 쇼",
  },
  {
    quote:
      "내 활력의 근원은 낮잠이다. 낮잠을 자지 않는 사람은 뭔가 부자연스러운 삶을 살고 있는 것이리라.",
    author: "- 처칠",
  },
  {
    quote: "노동 뒤의 휴식이야말로 가장 편안하고 순수한 기쁨이다.",
    author: "- 칸트",
  },
  {
    quote:
      "대문자만으로 인쇄된 책은 읽기 힘들다. 일요일밖에 없는 인생도 그것과 마찬가지이다.",
    author: "- 장 파울",
  },
  {
    quote: "수면은 피로한 마음의 가장 좋은 약이다.",
    author: "- 세르반테스",
  },
  {
    quote:
      "일만 하고 휴식을 모르는 사람은 브레이크가 없는 자동차 같아서 위험하기 짝이 없다. 또한 일할 줄 을 모르는 사람은 모터가 없는 자동차 같아서 아무 소용이 없다.",
    author: "- 존 포드",
  },
  {
    quote:
      "휴식은 어리석은 것이 아니다. 그리고 한 여름 나무 그늘 밑 잔디에 누워 졸졸 흐르는 물소리를 들으며 하늘을 떠다니는 구름을 보는 것은 결코 시간 낭비가 아니다.",
    author: "- 설 J. 럽복",
  },
  {
    quote: "휴일은 인간에게 주어진 것이지 인간이 휴일에게 주어진 것은 아니다.",
    author: "- 탈무드",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

function getQuotes() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

getQuotes();
setInterval(getQuotes, 10000);
