
const board = document.querySelector('.board');
const chronometer = document.querySelector('.chronometer');

// My array of cards
const signals = [
  'bike',
  'carro',
  'direction',
  'double',
  'parque',
  'ramp',
  'school',
  'stop'   
];

/**
 * Generating the cards using the tag and className parameters
 * @param {*} tag 
 * @param {*} className  
 */
function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let optionOne ='';
let optionTwo ='';

/* Make the matches cards to be disable for selection */
const endOfGame = () => {
    const disqualifiedCards = document.querySelectorAll('.disqualify_card');
   if(disqualifiedCards.length === 16) {
    /* To make the chronometer stop */
    clearInterval(this.loop);
    alert(`Congratulations, your time was: ${chronometer.innerHTML} seconds`); 

   }
}

/* Display placar of Combinations */
let numberOfCombinations = 0

const showResults = () => {
    numberOfCombinations++;
    const resultsView = document.getElementById('results');
    resultsView.textContent = `Number of Combinations: ${numberOfCombinations}`;

}

/**
 * verifycards2
 * Check if cards match
 ** if match increment the combination count
 ** if not hide the cards
 * Reset the stored card values
 */
const verifyCards = () => {
    const firstSignal = optionOne.getAttribute('data-signal');
    const secondSignal = optionTwo.getAttribute('data-signal');
    /* If Card Matches */
    if (firstSignal === secondSignal) { 
        optionOne.firstChild.classList.add('disqualify_card');
        optionTwo.firstChild.classList.add('disqualify_card');
        /* Increment the combination count */
        showResults(); 
        /* Reset the stored card values */
        optionOne = '';
        optionTwo = '';

        endOfGame();  
    /* If cards do not match, hide the cards after a delay */    
    }else { 
        setTimeout(() =>{
    
            optionOne.classList.remove('show_card');
            optionTwo.classList.remove('show_card');
        /* Reset the stored card values */
            optionOne = '';
            optionTwo = '';
        
        }, 500);
        
    
     }
    }