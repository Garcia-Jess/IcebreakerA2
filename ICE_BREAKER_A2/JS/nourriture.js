const cards = document.querySelectorAll('.cards');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

/* function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
} */



function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/*(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 4);
    card.style.order = randomPos;
  });
})();*/

cards.forEach(card => card.addEventListener('click', flipCard));






function myFunction() {
  var x = Math.floor((Math.random() * 6) + 1);
  result = document.getElementById("demo").innerHTML = x;
 
  
}


    









