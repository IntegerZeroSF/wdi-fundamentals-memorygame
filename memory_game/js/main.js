console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1])  {
       console.log("You found a match!");
    }   else { console.log("Sorry, Try again.");
}
}

function flipCard(cardID) {
    console.log("User flipped " + cards[cardID]);
    cardsInPlay.push(cards[0]);
}

flipCard(0);
flipCard(1);
checkForMatch();