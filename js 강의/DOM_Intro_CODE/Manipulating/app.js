const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

for (let link of allLinks) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
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

// .createElement - 태그 이름을 전달하여 새로운 요소 생성
// .appendChild - 특정 요소의 마지막 요소로 삽입 (노드만 전달 가능)
// .append - 다중 요소 삽입
// .prepend - 요소의 첫번째 자녀로 삽입
// .insertAdjacentElement(position, element) - 요소를 삽입하려는 위치를 지정하여 삽입

// .removeChild는 부모를 통해 자식을 삭제하는 것
// .remove는 제거하려는 바로 그 요소에 호출하느 메서드, 부모나 자식에는 신경쓰지 않아도 됨
