/* ---------------
Selecting elements
------------------*/

const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');//this is the accumulated score
const score1El=document.getElementById('score--1');//this is the accumulated score
const current0El=document.getElementById('current--0');//this is the current score
const current1El=document.getElementById('current--1');//this is the current score
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');




/**Setting initial conditions  */

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let  scores, currentScore, activePlayer, playing;
 
//---function to reset the whole game, when clicking NEW GAME
 const initial=function () {
    diceEl.classList.add('hidden');
    scores=[0,0];
    currentScore=0;
    activePlayer=0;
    playing= true; // create a variable to hold the state of the game
    // so when a player wins, the game finishes
    

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    // There is no need to remove the player--active
    // class from the player 1, because when the game
    // is resetted, then the player 1, by default will have
    // the active class
    activePlayer=0;   
    playing=true;
    diceEl.classList.add('hidden');
 }
 initial();
//-----Function to switch the player of the game

const  switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore = 0;
    activePlayer = activePlayer  === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

/**Rolling dice */

btnRoll.addEventListener('click', function () {
    if(playing){
        //  1.Generate a number dice roll
        const dice=Math.floor(Math.random()*6)+1;

        //  2 Display dice by removing hidden class
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`; //string template literal to access dynamically the src attributed of the selected img in the diceEl variable

        // 3. Check for rolled 1 
        if(dice !== 1){
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;

        } else{
            // switch to next player
            switchPlayer();
        }
    }
})

//-----------Holding the score---------

btnHold.addEventListener('click', function(){
    if(playing){
        // 1. Add current score to active player's accumulated score
        scores[activePlayer]+=currentScore;//add score to the position of activePlayer( 0 or 1) in the array
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        // 2. Check if player's score is >=100 and finish the game. When a player wins then playing is set to false
        // and thus the code in the event handler is not executed in this event and in the above event.
        if(scores[activePlayer]>=100){
            playing=false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }else{
            // 3. Switch to the next player
            switchPlayer();
            }
    }
})

/**-------
 * Resetting the Game
 */
btnNew.addEventListener('click', initial)

