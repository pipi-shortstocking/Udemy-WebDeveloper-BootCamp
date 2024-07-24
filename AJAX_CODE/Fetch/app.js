// fetch는 함수로 요청을 만들 수 있고, promise를 지원함

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESOLVED!", res); // fetch가 헤더를 수신하는 즉시 해당 프로미스가 resolve(처리)됨 -> 전체 본문이 표시되지 않는 이유
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESOLVED!", res); // fetch가 헤더를 수신하는 즉시 해당 프로미스가 resolve(처리)됨 -> 전체 본문이 표시되지 않는 이유
//     res.json().then((data) => {
//       // json() : res의 객체를 가져오는 함수
//       console.log("JSON DONE", data);
//     });
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
