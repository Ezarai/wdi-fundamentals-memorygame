var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
document.getElementsByClassName('board')[0].setAttribute('id', 'game-board');
var gameBoard = document.getElementById('game-board');
var kingCard = new Image(); //Preloading card images as they don't display in time otherwise
kingCard.src = "Card_Images/Spades 13.png"; 
var queenCard = new Image();
queenCard.src = "Card_Images/Spades 12.png";

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	card.setAttribute('data-card', cards[i]);
	card.setAttribute('data-cardId', i)
	card.addEventListener('click', isTwoCards);
	gameBoard.appendChild(card);

	}
}
var isMatch = function(inPlay) {
	if (inPlay[0][1] == inPlay[1][1]) {
		alert('Well done the cards match!');
	}
	else {
		alert('You failed!')
	}
}
var isTwoCards = function() {
	var cardType = this.getAttribute('data-card');
	var cardId = this.getAttribute('data-cardId');
	var wait = false;
	if (cardsInPlay == 0 || cardId != cardsInPlay[0][0]) {
		cardsInPlay.push([cardId, cardType]);
		if (cardType == 'king') {
			// this.innerHTML = '<img src="Card_Images/Spades 13.png" alt="King of spades"/>';
			this.style.backgroundImage = "url('Card_Images/Spades 13.png')";
		}
		else {
			// this.innerHTML = '<img src="Card_Images/Spades 12.png" alt="Queen of spades"/>'
			this.style.backgroundImage = "url('Card_Images/Spades 12.png')";
		}
		if (cardsInPlay.length == 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
			var cardReset = document.getElementsByClassName('card');
			for (var i = 0; i < cardReset.length; i++) {
				// cardReset[i].innerHTML = "";
				cardReset[i].style.backgroundImage = "url('Card_Images/_Back.png')"
			}
		}
	}
}

createBoard();


// if (cardTwo === cardFour) {
// 	alert("You found a match!");
// }
// else {
// 	alert("Sorry, try again.");
// }

// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// for (var i = 0; i < 4; i++) {
// 	var card = document.createElement('div');
// 	card.className = 'card';
// 	gameBoard.appendChild(card);
// }