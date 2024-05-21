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

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgifeetarecute") return "WELCOME!";
  throw "Invalid Password";
};

login("akjsdhsa", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

// 반환값이 있으면 resolved가 나타나고, 오류가 있으면 오류 값과 함께 rejected가 뜸
