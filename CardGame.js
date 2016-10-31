var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while(currentCard !== 'Spade') {
  console.log(currentCard);
  
  var randomNumber = Math.floor(Math.random() * 4);
  
  currentcard = currentcard[randomNumber];
}

console.log('Found Spade');
