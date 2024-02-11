
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