// function rollDie(numSides) {
//   if (numSides == undefined) {
//     numSides = 6;
//   }

//   // Math.random()은 0이상 1미만의 난수 반환
//   return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'Hey there', punc = '!') {
  console.log(`${msg}, ${person}${punc}`);
}
