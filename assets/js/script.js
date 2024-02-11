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
}