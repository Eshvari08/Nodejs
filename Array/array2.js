let numbers = [11,22,33,44,55];
let names = ["sanika","eshvari"];

console.log(numbers);
console.log(names);

numbers[2] = 10;
names[0] = "sanika";

console.log(numbers[4]);
console.log(names[0]);


console.log(numbers.length);
console.log(names.length);  

let firstNumber = numbers.shift();
console.log(numbers);


for (let i=4; i<numbers.length; i++) {
  console.log(numbers[i]);
}