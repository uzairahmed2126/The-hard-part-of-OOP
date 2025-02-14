// this is good but it will not use the existing function it is make copy's on each and every calling it will create impact to memory and lack the performance
// function userCreator(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function () {
//     newUser.score++;
//   };
//   return newUser;
// }
// const user1 = userCreator("john", 4);
// user1.increment();
// console.log(user1);

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You're loggedIn");
  },
};
const user1 = userCreator("john", 4);
const user2 = userCreator("Julia", 5);
user1.increment(); //5
user1.login(); //You're loggedIn
user2.increment(); //6
console.log(user1, user2);
console.log(typeof NaN === "number" && NaN === NaN);
console.log(NaN === NaN);
