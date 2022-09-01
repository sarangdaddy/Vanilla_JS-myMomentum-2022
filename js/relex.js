const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const relexDiv = document.querySelector(".relex");

function getRelexImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  relexImage.src = `img/${chosenImage}`;
}

const relexImage = document.createElement("img");
relexImage.classList.add("relex_img");
relexDiv.appendChild(relexImage);

getRelexImage();
setInterval(getRelexImage, 5000);
