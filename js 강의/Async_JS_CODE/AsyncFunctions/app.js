// async 자체가 함수를 비동기 함수로 선언하는 키워드
// async가 붙은 비동기 함수는 자동으로 Promise를 반환함

// async function hello() {}

// const sing = async () => {
//   throw "OH NO, PROBLEM!";
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     console.log("PROMISE RESOLVED WITH:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO, PROMISE REJECTED!");
//     console.log(err);
//   });

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials";
//   if (password === "corgifeetarecute") return "WELCOME!";
//   throw "Invalid Password";
// };

// login("akjsdhsa", "corgifeetarecute")
//   .then((msg) => {
//     console.log("LOGGED IN!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("ERROR!");
//     console.log(err);
//   });

// 반환값이 있으면 resolved가 나타나고, 오류가 있으면 오류 값과 함께 rejected가 뜸

// await는 비동기 코드를 쓰면서 동기적으로 보이게 해줌
// Promise가 값을 반환할 때(해결 될 때)까지 기다리기 위해 비동기 함수의 실행을 일시정지 시킴

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("orange", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("indigo", 1000);
//   await delayedColorChange("violet", 1000);
//   return "ALL DONE!";
// }

// rainbow().then(() => console.log("END OF RAINBOW!"));

// async function printRainbow() {
//   await rainbow();
//   console.log("END OF RAINBOW!");
// }

// printRainbow();

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout : (");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  let data1 = await fakeRequest("/page1");
  console.log(data1);
}
