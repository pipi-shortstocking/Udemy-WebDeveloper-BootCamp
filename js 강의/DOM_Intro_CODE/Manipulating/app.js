const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// const firstLink = document.querySelector("a");

// 같은 것을 지목하는 두 명령어의 차이

// firstLink.href; // JavaScript를 거침
// "file://wiki/List_of_chicken_breeds"
// firstLink.getAttribute("href"); // html에서 바로 불러옴
// "/wiki/List_of_chicken_breeds"

// setAttribute를 통해 속성을 바꿀 수도 있음

// JavaScript에서는 카멜 케이스 사용
// style 속성 부여 시, 문자열 사용

// classList : 요소의 클래스를 제어하고, 클래스를 검색하며 조작함

// const firstBold = document.querySelector("b");

// firstBold.parentElement; // 부모 요소 선택
// .childElementCount - 자식 요소의 개수를 알려줌
// .children - htmlcollection 반환
// .previousSibiling <-> .nextSibiling - 해당하는 노드 출력
// .previousElementSibiling <-> .nextElementSibiling - 해당하는 요소 출력
