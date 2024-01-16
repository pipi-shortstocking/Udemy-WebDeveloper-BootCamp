// const person = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const person = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: () => {
//     // this 키워드가 윈도우 객체를 가리킴
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const person = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(function () {
//       console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
// };

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
