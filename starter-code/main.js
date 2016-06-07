var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


// if (cardTwo === cardFour) {
// 	alert("You found a match!");
// }
// else {
// 	alert("Sorry, try again.");
// }

document.getElementsByClassName('board')[0].setAttribute('id', 'game-board');

var gameBoard = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	gameBoard.appendChild(card);
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	card.setAttribute('data-card', cards[i]);
	gameBoard.appendChild(card);

	}

}