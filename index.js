const startGameButton = document.querySelector(".game-start");
const restartGameButton = document.querySelector(".game-restart");
const gameBoard = document.querySelector(".memory-game-board");
const successCount = document.querySelector(".success-count");
const cards = document.querySelectorAll(".memory-card");

const CARD_TOTAL_NUMBER = 12;

let hasFlippedCard = false;
let lockCard = false;
let successCountNum = 0;
let firstClickCard;
let secondClickCard;

function restartGame() {
  startGameButton.classList.remove("hide");
  restartGameButton.classList.add("hide");
  gameBoard.classList.add("hide");
  successCount.classList.add("hide");
  cards.forEach(card => card.classList.remove("flip"));
}

function finishGame() {
  if (successCountNum === (CARD_TOTAL_NUMBER / 2)) {
    setTimeout(() => {
      gameBoard.classList.add("hide");
      successCount.classList.add("hide");
    }, 2000);
  }
}

function flipCard() {
  if (lockCard) return;

  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstClickCard = this;
  } else {
    //second click
    hasFlippedCard = false;
    secondClickCard = this;

    reviewCardMatch();
  }
}

function reviewCardMatch() {
  const isMatch = firstClickCard.dataset.image === secondClickCard.dataset.image;
  //matching
  if (isMatch) {
    successCountNum++;
    firstClickCard.removeEventListener("click", flipCard);
    secondClickCard.removeEventListener("click", flipCard);
    successCount.textContent = `성공 개수 : ${successCountNum}`
  } else {
    lockCard = true;

    setTimeout(() => {
      firstClickCard.classList.remove("flip");
      secondClickCard.classList.remove("flip");
      lockCard = false;
    }, 700);
  }

  finishGame();
}

function suffleCard() {
  cards.forEach(card => {
    let randomCardNumberSet = Math.floor(Math.random() * CARD_TOTAL_NUMBER);
    card.style.order = randomCardNumberSet;
  })
};

function startGame() {
  successCountNum = 0;
  successCount.textContent = `성공 개수 : ${successCountNum}`
  startGameButton.classList.add("hide");
  restartGameButton.classList.remove("hide");
  gameBoard.classList.remove("hide");
  successCount.classList.remove("hide");

  suffleCard();
  cards.forEach(card => card.addEventListener("click", flipCard));
}

startGameButton.addEventListener("click", startGame);
restartGameButton.addEventListener("click", restartGame);
