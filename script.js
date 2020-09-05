 window.addEventListener('load', startGame);

 // Globals
 let time = 5;
 let score = 0;
 let isPlaying;


 // DOM Elements
 const wordInput = document.querySelector('#word-input');
 const currentWord = document.querySelector('#current-word');
 const scoreDisplay = document.querySelector('#score');
 const timeDisplay = document.querySelector('#time');
 const message = document.querySelector('#message');
 const seconds = document.querySelector('#seconds');

 const words = [
 	'Seasame',
 	'rumble',
 	'quagmire',
 	'unravel',
 	'beaut',
 	'exquisite',
 	'emerald',
 	'hiatus',
 	'Rock and Roll',
 	'investigate',
 	'roller coaster',
 	'medication',
 	'uncertainty',
 	'horrendous',
 	'laughter',
 	'enigma',
 	'developer',
 	'designer',
 	'cocktail',
 	'runaway',
 	'establishment',
 	'presposterous',
 	'bogus',
 	'glamor',
 	'javascript',
 	'react',
 	'mongoDB',
 	'designer',
 	'cocktail',
 	'runaway',
 	'kilogram',
 ];

 //initialize game

 function startGame() {
 	// Load word from array
 	showWord(words);
 	// matching word input
 	wordInput.addEventListener('input', startTyping);
 	// call countdown every second
 	setInterval(countDown, 1000);
 	setInterval(checkStatus, 50);
 }

 function showWord(words) {
 	 // Generate random array index
 	 const randWord = Math.floor(Math.random()*words.length);
 	 // output random word
 	 currentWord.innerHTML = words[randWord];
 }

 function startTyping() {
 	if (matchWords()) {
 		isPlaying = true;
 		time = 6;
 		showWord(words);
 		wordInput.value = '';
 		score++;
 	}
 	scoreDisplay.innerHTML = score;
 }

 // Match words
 function matchWords() {
 	if (wordInput.value === currentWord.innerHTML) {
 		message.innerHTML = 'Correct!!';
 		return true;
 	} else {
 		message.innerHTML = '';
 		return false;
 	}
 }
 // Countdown timer
 function countDown() {
 	if (time > 0) {
 		//Countdown
 		time--;
 	} else if (time === 0) {
 		// Game Over
 		isPlaying = false;
 	}

 	// Show time
 	timeDisplay.innerHTML = time;
 }

 // Check game status
 function checkStatus() {
 	if (!isPlaying && time === 0) {
 		message.innerHTML = `Game Over!!`
 	}
 }