// const num = [1, 2, 3, 4, 5, 6, 7];
// const even = num.filter(value =>
//     value % 2 == 0
// );
// console.log(even);

// const prices = [3, 20, 5, 12, 22];
// const arr = prices.map(value => value * 0.9);
// console.log(arr);

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

// const calculator = (a, b, operator) => {
//     if (operator == "+") {
//         let sum = a + b;
//         console.log("Addition = ", sum);
//         return sum;

//     }

//     else if (operator == "-") {
//         let diff = a - b;
//         console.log("Difference = ", diff);
//         return diff;
//     }

//     else if (operator == "*") {
//         let product = a * b;
//         console.log("Product = ", product);
//         return product;
//     }
//     else if (operator == "/") {
//         let div = a / b;
//         console.log("Division = ", div);
//         return div;
//     }
// }

// const students = ["Ram", "Shyam", "Hari", "Gita"];
// const result = students.map((students) => {

//     return "Mr./Mrs." + students;

// })
// console.log(result);

//To Add 10
// const marks = [20, 30, 90, 80];

// const result = marks.map(mark => mark + 10);

// console.log(result);

//To show 40 above is passed using map
// const marks = [20, 30, 90, 80];

// const result = marks.map(mark => {
//     return mark > 40 ? "Passed" : "Failed";
// });

// console.log(result);

//To show 40 above is passed using filter
// const marks = [20, 30, 90, 80, 45];

// const passed = marks.filter(mark => mark > 40);

// console.log("Passed marks:", passed);

// const students = [
//     { id: 1, name: "Ram" },
//     { id: 2, name: "Shyam" },
//     { id: 3, name: "Hari" },
//     { id: 2, name: "Harihar" },
// ];

// const student = students.find(student => student.id === 2);

// console.log(student);

// const students = [
//     { name: "Ram", email: "ram@gmail.com" },
//     { name: "Sam", email: "sam@gmail.com" },
//     { name: "Hari", email: "hari@gmail.com" },

// ];

// const student = students.find(student => student.name === "Hari");

// console.log(student);

// const products = [
//     { id: 1, name: "Monitor", price: 5000, stock: true },
//     { id: 2, name: "keyboard", price: 3000, stock: true },
//     { id: 3, name: "Mouse", price: 500, stock: true },
//     { id: 4, name: "speaker", price: 5500, stock: false },

// ];

// //use map()to get all products name.
// const productnames = products.map((product) => product.name);
// console.log(productnames);

// //use filter()to get only available products (stock==true).
// const availableproducts = products.filter((product) => product.stock == true);
// console.log(availableproducts);

// //use find() to find the product whose id is 2.
// const product = products.find((product) => product.id == 2);
// console.log(product);

// const markss = [48, 45, 47, 49, 50];
// const failed = markss.some((mark) => {
//     return mark < 48;
// });
// console.log(failed);

// const marks = [48, 45, 47, 49, 50];
// const passed = marks.every((mark) => {
//     return mark > 40;
// });
// console.log(passed);

// let marks = 90;

// if (marks >=80) {
//     console.log(`A`)
// }
// else if (marks = 70) {
//     console.log(`B`)
// }
// else {
//     console.log("Fail")
// }


//traffic light ko signal nikalni
// let light = "Red";

// if (light == "Red") {
//     console.log(`STOP`)
// }
// else if (light == "orange") {
//     console.log(`BE READY`)
// }
// else {
//     console.log(`GO!`)
// }
// const day;

// if (day == "sunday"||"saturday") {
//     console.log(`Weekend`)
// }
// else {
//     console.log(`Weekday`)
// }

// let name = String(prompt("Enter your name:"));
// if (name.length >= 6) {
//     console.log(name)
// }
// else {
//     console.log("Error!:name must be at least 6 character long")
// }

// let username = String(prompt("Username:"));
// let password = String(prompt("Password:"));

// if (username == "Arpi_Here" && password == arpihere0102) {
//     console.log("Correct Name");
// }

