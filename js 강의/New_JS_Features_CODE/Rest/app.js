// arguments.reduce is not a function -> arguments가 인수객체이기 때문
// (arguements는 화살표 함수에서도 사용 불가!)
// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
