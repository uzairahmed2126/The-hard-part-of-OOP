const user = {
  name: "joe",
  score: 0,
  increment: function () {
    this.score++;
  },
};
let incrementBy1 = user.increment();
console.log(user);
