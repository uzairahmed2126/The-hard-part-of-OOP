const user1 = {
  name: "joe",
  score: 0,
  increment: function () {
    this.score++;
  },
};
let incrementBy1 = user1.increment();
console.log(user1);

const user = {
  name: "Julia",
  score: 10,
  increment() {
    this.score++;
  },
  details: {
    email: "julia@example.com",
    address: "123 Main St"
  }
};

user.increment();  // Increases score to 11
console.log(user.details.email);  // Access nested object
