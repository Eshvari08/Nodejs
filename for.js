let person = {
    name: "John",
    age: 30,
    gender: "male"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}