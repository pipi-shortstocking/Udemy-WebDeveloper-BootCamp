console.log("Sending request to server!");
setTimeout(() => {
  // 단일 스레드인 JS인데, 해당 함수가 실행되는 것은 브라우저가 실행하기 때문!
  // 브라우저는 보통 C++와 같은 언어로 만들어짐 -> JS가 할 수 없는 일 가능
  // Web APIs : 일반적으로 JS에서 호출하여 브라우저로 전달하는 방법
  console.log("Here is your data from the server...");
}, 3000);
console.log("I AM AT THE END OF THE FILE!");
