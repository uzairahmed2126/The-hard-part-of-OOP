// // Object with a method defined for each instance
// function Counter(value) {
//   this.value = value;
//   this.increment = function () {
//     this.value++;
//   };
// }

// const counter1 = new Counter(5);
// // const counter2 = new Counter(5);
// counter1.increment();
// console.log(counter1.value); //6

// // Define the function on the prototype instead
function Counter(value) {
  this.value = value;
}

Counter.prototype.increment = function () {
  this.value++;
};

const counter1 = new Counter(5);
const counter2 = new Counter(10);

console.log(counter1.increment === counter2.increment); // true

// class Counter {
//   constructor(value) {
//     this.value = value;
//   }

//   increment() {
//     this.value++;
//   }
// }

// const counter1 = new Counter(5);
// const counter2 = new Counter(10);
// console.log(counter1.increment === counter2.increment); // true
// console.log(counter1.increment === counter2.increment); // true

// The same function is using while we use object function it is creating on each calling that's takes more spaces in memory
// function Counter(value) {
//   this.value = value;
//   this.increment = function () {
//     this.value++;
//   };
// }

// const counter1 = new Counter(5);
// const counter2 = new Counter(10);

// console.log(counter1.increment === counter2.increment); // false
