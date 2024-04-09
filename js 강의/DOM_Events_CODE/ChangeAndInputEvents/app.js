const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// // 뭔가 일어날 때마다(X), 뭔가 변경될 때마다(X)
// // 그 입력을 떠날 때마다(O)
// input.addEventListener('change', function (e) {
//   console.log('ASDFA');
// });

input.addEventListener('input', function (e) {
  h1.innerText = input.value;
});
