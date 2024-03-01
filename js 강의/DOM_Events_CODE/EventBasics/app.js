const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

function scream() {
  console.log("AAAAAHHHHH");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED!");
});

function twist() {
  console.log("TWIST!");
}
function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// 위와 같이 onclick만으로는 두 함수 동시 실행 불가
// tasButton.addEventListener("click", twist, { once: true }); // 한 번만 실행되고 삭제됨
tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
