const quotes = [
  {
    quote: "인간은 인생의 방향을 결정할 규칙을 가지고 있어야 한다.",
    author: "John Wayne",
  },
  {
    quote: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
    author: "Seneca",
  },
  {
    quote: "삶은 즐겁다. 죽음은 평화롭다. 골칫거리는 바로 그 중간과정이다.",
    author: "Isaac Asimov",
  },
  {
    quote: "성공한 사람보다는 가치 있는 사람이 되려 하라.",
    author: "Albert Einstein",
  },
  {
    quote:
      "품질이 물량보다 더 중요합니다. 한 번의 홈런이 두 번의 2루타보다 나아요.",
    author: "Steve Jobs",
  },
  {
    quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "Saint-Exupery",
  },
  {
    quote: "인생이란 네가 다른 계획을 세우느라 바쁠 때 너에게 일어나는 것이다.",
    author: "John Lennon",
  },
  {
    quote: "나이가 성숙을 보장하지는 않는다.",
    author: "Lawana Blackwell",
  },
  {
    quote: "게으름은 피곤하기 전에 쉬는 습관일 뿐.",
    author: "Jules Renard",
  },
  {
    quote: "무릇 간결은 지혜의 본질이요.",
    author: "William Shakespeare",
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
