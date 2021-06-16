

// This is a game which enables DOM manipulation. First 
// there is the initial code and then follows a refactored
// version of the code, which retains the same functionality.



let hiddenNumber=Math.floor(Math.random()*20) +1;
let score=20;
let highscore=0;

/*The score will start at 20 end for every
 * wrong guess the score will be reduced by 1. 
 * The purpose of the game is to retain
 * the highest score possible.
*/

document.querySelector('.check').addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	//When there is no input
	if(!guess){
		document.querySelector('.message').textContent='You must insert numeric input!'
	}

	//When the player wins
	else if(guess===hiddenNumber ) {
		document.querySelector('.number').textContent=hiddenNumber;
		document.querySelector('.message').textContent="Correct Number!"
		document.querySelector('body').classList.add('winning');
		document.querySelector('.number').style.width='30rem';
		
		if (score>highscore) {
			document.querySelector('.highscore').textContent=score;
		}
	}
	//when the guess is too high
	else if(guess>hiddenNumber){
		if(score>1){ 

			/**for every wrong guess we have to subtract 1 from score
			until it reaches 0, where the game is finished */
		score--;
		
		document.querySelector('.message').textContent="Too high!";
		
		document.querySelector('.score').textContent=score;
		}else{
			document.querySelector('.message').textContent='Game Over';
			document.querySelector('.score').textContent=0;
			document.querySelector('body').classList.add('gameOver');
		}
	}
	//when the guess is too low
	else if (guess<hiddenNumber) {
		if(score>1){

			/**for every wrong guess we have to subtract 1 from score
			until it reaches 0, where the game is finished */

			score--;
			document.querySelector('.message').textContent="Too low!";
			
			document.querySelector('.score').textContent=score;
			}else{
				document.querySelector('.message').textContent='Game Over';
				document.querySelector('.score').textContent=0;
				document.querySelector('body').classList.add('gameOver');
			}
	}
/**ALL THE ABOVE CODE RUNS WHEN THE EVENT LISTENER IS TRIGERED BY THE CLICK EVENT */
})

document.querySelector('.again').addEventListener('click', ()=>{
	hiddenNumber=Math.floor(Math.random() * 20 )+1;
	score=20;
	document.querySelector('.check').value= '';
	document.querySelector('.message').textContent='Start guessing...';
	document.querySelector('.score').textContent=score;
	document.querySelector('body').classList.remove('winning');
	document.querySelector('body').classList.remove('gameOver');
	document.querySelector('.number').style.width='15rem';
	document.querySelector('.number').textContent='?';
	document.querySelector('.guess').value=' ';
})



// ***********************REFACTORING MY CODE*******************

// restructured code to eliminate duplicate code, while
// retaining the same functionality.

// let hiddenNumber=Math.floor(Math.random()*20) +1;
// let score=20;
// let highscore=0;

// /*The score will start at 20 end for every
//  * wrong guess the score will be reduced by 1. 
//  * The purpose of the game is to retain
//  * the highest score possible.
// */
// const displayMessage= function(message){
// 	document.querySelector('.message').textContent=message;
// }

// document.querySelector('.check').addEventListener('click', function(){
// 	const guess = Number(document.querySelector('.guess').value);
// 	console.log(guess, typeof guess);

// 	//When there is no input
// 	if(!guess){
// 		//document.querySelector('.message').textContent='You must insert numeric input!'
// 		// instead refactor the above line with the following function
// 		displayMessage('You must insert numeric input')
// 	}

// 	//When the player wins
// 	else if(guess===hiddenNumber ) {
// 		document.querySelector('.number').textContent=hiddenNumber;
// 		// document.querySelector('.message').textContent="Correct Number!";
// 		// instead refactor the above line with the following function
// 		displayMessage('Correct Number!')
// 		document.querySelector('body').classList.add('winning');
// 		document.querySelector('.number').style.width='30rem';
		
// 		if (score>highscore) {
// 			document.querySelector('.highscore').textContent=score;
// 		}
// 	}
	
// 	//*****************  when the guess is wrong

// 	else if(guess !== hiddenNumber) {
// 		if(score>1){
			
// 			/**for every wrong guess we have to subtract 1 from score
// 			until it reaches 0, where the game is finished */

// 			score--;
// 			// document.querySelector('.message').textContent=guess>hiddenNumber?
// 			// 'Too high': 'Too low';
// 			// instead refactor the above line with the following function
// 			displayMessage(guess>hiddenNumber?'Too high': 'Too low';)

// 			//in the above line the result of the ternary operator will
// 			// be either the first or the second string
			
// 			document.querySelector('.score').textContent=score;
// 		}else{
// 			// document.querySelector('.message').textContent='Game Over';
// 			displayMessage('Game Over')
// 			document.querySelector('.score').textContent=0;
// 			document.querySelector('body').classList.add('gameOver');
// 			}
// 	}
// /**ALL THE ABOVE CODE RUNS WHEN THE EVENT LISTENER IS TRIGERED BY THE CLICK EVENT */
// })

// document.querySelector('.again').addEventListener('click', ()=>{
// 	hiddenNumber=Math.floor(Math.random() * 20 )+1;
// 	score=20;
// 	document.querySelector('.check').value= '';
// 	// document.querySelector('.message').textContent='Start guessing...';
// 	displayMessage('Start guessing...');
// 	document.querySelector('.score').textContent=score;
// 	document.querySelector('body').classList.remove('winning');
// 	document.querySelector('.number').style.width='15rem';
// 	document.querySelector('.number').textContent='?';
// 	document.querySelector('.guess').value=' ';
// })

