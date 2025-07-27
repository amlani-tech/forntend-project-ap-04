let currentIndex = 0;
const cards = document.querySelectorAll(".firing-card");

function showCard(index) {
  cards.forEach((card, i) => card.classList.remove("active"));
  cards[index].classList.add("active");
}

function moveSlide(step) {
  currentIndex = (currentIndex + step + cards.length) % cards.length;
  showCard(currentIndex);
}
