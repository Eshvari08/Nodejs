let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana","grapes", "orange"];

console.log(numbers);
console.log(fruits);

numbers[4] = 2;
fruits[1] = "apple";

console.log(numbers[2]);
console.log(fruits[1]);

console.log(numbers.length);
console.log(fruits.length); 

numbers.push(6);
console.log(numbers);

let lastFruit = fruits.pop();
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);

let secondNumber = numbers.shift();
console.log(numbers);

for (let i = 2; i < numbers.length; i++) {
  console.log(numbers[i]);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});

for (let fruit of fruits) {
  console.log(fruit);
}

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

fruits.splice(2, 1, "kiwi", "pear");
console.log(fruits);

fruits.includes("banana"); 
console.log(fruits.includes("Banana"));
