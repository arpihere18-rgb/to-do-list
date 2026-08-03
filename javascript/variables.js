//function?
//block of usable code

//recursive function?
//function which calls back itself

// call back function?
// function passed as argument to another function

// function main(callback) {
//     console.log("Main function started");
//     callback("Arpita")
// }
// function test(a) {
//     console.log("Hello");
// }

// function test1(b) {
//     console.log("Hi Everyone!!!");
// }
// main(test);
// main(test1);

// function calculation(num1, num2, callback) {
//     callback(num1, num2);
// }
// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// function substract(num1, num2) {
//     console.log(num1 - num2);
// }

// function product(num1, num2) {
//     console.log(num1 * num2);
// }

// function divide(num1, num2) {
//     console.log(num1 / num2);
// }

// calculation(10, 20, add);
// calculation(10, 20, substract);
// calculation(10, 20, product);
// calculation(10, 20, divide);


//iterate over the array using for-loop

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

//for each()


// num.forEach(function (Halku) {

//     console.log(Halku);

// })
num.forEach(function (value, index) {
    console.log(`The ${value} is in ${index}`);

});
//sum of all numbers
num.forEach((value, index) => { console.log(`${value} is at${index}`) })
let sum = 0;
num.forEach((value) => { sum = sum + value })
console.log(sum);