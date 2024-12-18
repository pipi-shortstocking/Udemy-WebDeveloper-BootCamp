// 모든 문자열에 대한 프로토타입 객체
// 문자열 메서드가 저장되는 장소
String.prototype 

String.prototype.yell = function() {
	// this는 메서드를 호출한 문자열 참조
	// console.log(this.toUpperCase());
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

// 특정 객체이자 템플릿 - 모든 배열에 대해 메서드와 특성 저장
Array.prototype


Array.prototype.pop = function() {
	return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
};

// => 공통 특성과 메서드를 포함하는 하나의 객체를 갖는 것

// __proto__ : 객체의 프로토타입에 대한 참조