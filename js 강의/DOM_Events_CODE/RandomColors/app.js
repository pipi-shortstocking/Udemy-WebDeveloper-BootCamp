const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

// 충분한 정도의 길이가 될 경우, 따로 빼놓는 습관을 들이는 것이 좋음!
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
