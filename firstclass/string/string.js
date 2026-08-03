// let a="Nepathya college"
// let b="Tilottama-5,Manigram"
// console.log(`I study at ${a} which is located at ${b}. `);

// let a="20";
// console.log(typeof a);
// let b=Number(a);
// console.log(typeof b);


//  console.log(10/0);
//  console.log(-10/0);

//  console.log("10"*5);

//  console.log("home"*5);

//  console.log("10abc"*5);

//  console.log("number(home)");

// let a= 2.4567854658;

// console.log(a.toFixed(2)); //jati number halyo teti nai paxadi dekhauxa


// console.log(Math.floor(18.165));
// console.log(Math.ceil(18.165));

// console.log(Math.round(1.165));

// console.log(Math.trunc(1.3456));
// console.log(Math.trunc(5.56));

// console.log(Math.abs(-100));

// console.log(Math.max(10,20,30,40));

// console.log(Math.min(10,20,30,40));

// console.log(Math.pow(8,2));

// console.log(Math.sqrt(64));

// console.log(Math.random() * 100);

// console.log(Math.round(Math.random() * 100));

// average nikalni
// max and min nikalni
// total nikalni
// students ko marks calculate garne program banau

// let marks = [85,90,78,92,88];
// let total=0;
// for(let i=0; i<marks.length; i++){
//     total +=marks[i];

// }
// console.log(average = total/marks.length);
// let max = marks[0];
// let min = marks[0];
// for(let i =1; i<marks.length; i++){
//     if(marks[i]>max){
//         max = marks[i];
//     }
//     if(marks[i]<min){
//         min = marks[i];


//     }
// }
// console.log(max);
// console.log(min);

// const now = new Date(2026, 0, 2); january 2, 2026
// console.log(now);

// const now = new Date();
// // // console.log(now.getFullYear()); 2026
// // console.log(now.getMonth()); jan
// // console.log(now.getDate()); 3
// // console.log(now.getDay()); 3

// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())


// const now = new Date();
// const day = now.getDate();
// const month = now.getMonth();
// const year = now.getFullYear();

// console.log(`${day}/${month}/${year}`);


// method 2

// const today = new Date();
// const formattedDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
// console.log(formattedDate);

// method 3
// const today = new Date();
// const day = String(today.getDate()).padStart(2, '0');
// console.log(day);

// const month = String(today.getMonth() + 1).padStart(2, '0');
// console.log(month);

// const year = today.getFullYear();
// console.log(year);

// const formattedDate = `${day}/${month}/${year}`;
// console.log(formattedDate);

// // method 4
// const today = new Date();
// console.log(today.toLocaleDateString('en-GB'));

//array
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// console.log(fruits[0]);

// console.log(fruits[fruits.length - 1]);
// let num = ["a", "b", "c"];

// num[1] = "d";
// console.log(
//     num.includes("d"));

// console.log(num.indexOf("a")); //tells the index of the element

// console.log(num.indexOf("x")); //-1 if element is not found

// num.unshift("y");


// //remove last element
// num.pop();

// //remove first element
// num.shift();


// let classes = ["maths", "english", "science"];
// console.log(classes);

// console.log(classes.includes("english"));
// console.log(classes.indexOf("maths"));
// console.log(classes.indexOf("history"));

// console.log(classes.reverse());
// console.log(classes.join("-"));


// let students = [];

// students.unshift("Hari", "Shyam", "Ram");

// // students.splice(0, 3);

// console.log(students);

// //print first and last element of array

// console.log(students.pop());

// console.log(students.shift());

// let names = ["Hari", "Ram", "Shyam", "Gita"];
// for (let i = 0; i <= names.length; i++); {

//     console.log(names[i]);
// }



