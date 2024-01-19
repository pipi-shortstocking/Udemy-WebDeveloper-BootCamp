const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums); //NaN
Math.max(...nums); //53456

// 배열에서의 spread
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]; // 콘솔에서 직접적으로 요소 추가 가능

// 객체에서의 spread
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine }; // family에 충돌 발생

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke',
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
