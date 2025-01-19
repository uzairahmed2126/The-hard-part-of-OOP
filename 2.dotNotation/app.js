const user = {};
user.fname = "Uzair";
user.lname = "Ahmed";
user.increment = 0;
console.log(user);

// using destructuring
const person1 = {};
person1["firstname"] = "Uzair";
person1["lastname"] = "Ahmed";

// accessing through dot notation
person1.firstname; // Expected output: "Uzair"

const person2 = {
  firstname: "Abdul",
  lastname: "Musavvir",
};

person2["lastname"]; // Expected output: "Musavvir"
