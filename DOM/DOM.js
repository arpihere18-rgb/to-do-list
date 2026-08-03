// const demo = document.getElementById("demo");
// demo.innerHTML = "Fun to Learn!";

// const h1tag = document.getElementsByClassName("Hero")[0];
// h1tag.style.color = "brown";

// const ptags = document.getElementsByTagName("p");
// {
//     ptags[1].style.color = "white";
// }

// let poles = document.querySelectorAll("button")
// poles[0].style.background = "crimson"
// poles[1].style.background = "darkorange"
// poles[2].style.background = "gold"
// poles[3].style.background = "greenyellow"
// poles[4].style.background = "cadetblue"
// poles[5].style.background = "cornflowerblue"
// poles[6].style.background = "slateblue"
// poles[7].style.background = "mediumpurple"
// poles[8].style.background = "orchid"
// poles[9].style.background = "hotpink"



// let poles = document.querySelectorAll("button")
// let clr = ["white", "slateblue", "skyblue", "greenyellow", "orchid", "hotpink", "olive", "gold", "orange", "green"];
// for (let i = 0; i < poles.length; i++) {
//     poles[i].style.background = clr[i]
// }



// let buttons = document.querySelectorAll("button")

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].style.backgroundColor = buttons[i].id;
//     buttons[i].style.Color = "white";

// }





// let poles = document.querySelectorAll("button")
// let clr = ["maroon", "slateblue", "red", "yellow", "hotpink", "grey", "skyblue", "purple", "greenyellow", "olive"]
// for (let i = 0; i < poles.length; i++) {
//     poles[i].style.color = "white";
//     poles[i].style.backgroundColor = clr[i];

// }




// document.getElementById("red").addEventListener("click", function () {
//     document.body.style.backgroundColor = "red";
// })
// document.getElementById("yellow").addEventListener("click", function () {
//     document.body.style.backgroundColor = "yellow";
// })
// document.getElementById("lime").addEventListener("click", function () {
//     document.body.style.backgroundColor = "lime";
// })
// document.getElementById("gold").addEventListener("click", function () {
//     document.body.style.backgroundColor = "gold";
// })
// document.getElementById("cyan").addEventListener("click", function () {
//     document.body.style.backgroundColor = "cyan";
// })
// document.getElementById("purple").addEventListener("click", function () {
//     document.body.style.backgroundColor = "purple";
// })
// document.getElementById("maroon").addEventListener("click", function () {
//     document.body.style.backgroundColor = "maroon";
// })
// document.getElementById("brown").addEventListener("click", function () {
//     document.body.style.backgroundColor = "brown";
// })
// document.getElementById("white").addEventListener("click", function () {
//     document.body.style.backgroundColor = "white";
// })
// document.getElementById("green").addEventListener("click", function () {
//     document.body.style.backgroundColor = "green";
// })


// let buttons = document.querySelectorAll("button")
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         document.body.style.backgroundColor = buttons[i].id;
//     });
// }

// let par = document.getElementsByTagName("p");
// par[0].style.color = "black";

// let btns = document.getElementsByTagName("button");
// btns[0].style.background = "pink";
// btns[0].style.borderColor = "pink";
// btns[1].style.background = "skyblue";
// btns[1].style.borderColor = "skyblue";


// document.getElementById("hide").addEventListener("click", function () {
//     document.body.style.backgroundColor = "pink"
//     btns[0].style.color = "pink";
//     btns[0].style.border = "none";
//     btns[1].style.color = "black";
//     btns[1].style.borderColor = "skyblue";
//     par[0].style.color = "pink";
// })

// document.getElementById("show").addEventListener("click", function () {
//     document.body.style.backgroundColor = "skyblue"
//     btns[1].style.color = "skyblue";
//     btns[1].style.border = "none";
//     btns[0].style.color = "black";
//     btns[0].style.borderColor = "pink";
//     par[0].style.color = "black";
// })

// let div = document.getElementsByTagName("div");
// let hide = document.getElementById("hide");
// let show = document.getElementById("show");
// hide.addEventListener("click", function () {
//     div.style.display = "none";
// });


// let count = 0;

// const countDisplay = document.getElementById("count");
// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");

// increaseBtn.addEventListener("click", function () {
//     count++;
//     countDisplay.textContent = count;
// });

// decreaseBtn.addEventListener("click", function () {
//     count--;
//     countDisplay.textContent = count;
// });

// resetBtn.addEventListener("click", function () {
//     count = 0;
//     countDisplay.textContent = count;
// });



// var countNum = 0;
// let count = document.getElementById("count");
// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");
// let reset = document.getElementById("reset");


// increase.addEventListener("click", function () {
//     countNum++;
//     count.textContent = countNum;
// });

// decrease.addEventListener("click", function () {
//     countNum--;
//     count.textContent = countNum;
// });


// reset.addEventListener("click", function () {
//     countNum = 0;
//     count.textContent = countNum;
// });


// function StudentProfile() {
//     let name = document.getElementById("name").value
//     let age = document.getElementById("age").value
//     let name1 = document.getElementById("name1")
//     let age1 = document.getElementById("age1")
//     let profile = document.getElementById("profile")
//     profile.innerHTML = "Student profile:"
//     name1.innerHTML = "Name:" + name;
//     age1.innerHTML = "Age:" + age;


// function ShowProfile() {
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;

//     document.getElementById("profile").innerhtml =
//         "<h3>Student Profile </h3>" + "Name :" + name + "br" + "Age : " + age;

// }

// function StudentProfile() {
//     let name = document.getElementById("name").value
//     let age = document.getElementById("age").value
//     // let name1=document.getElementById("name1")
//     // let age1=document.getElementById("age1")
//     let profile = document.getElementById("profile")

//     profile.innerHTML = "<h2>Student profile:</h2>" + "<h4>Name:</h4>" + name
//         + "<br>" + "<h4>Age:</h4>" + age

// }



// function result() {
//     let marks = document.getElementById("marks").value;
//     let ans = document.getElementById("ans");

//     if (marks >= 90) {
//         ans.innerHTML = "A+";
//     }
//     else if (marks >= 70) {
//         ans.innerHTML = "B+";
//     }
//     else if (marks >= 60) {
//         ans.innerHTML = "C+";
//     }
//     else {
//         ans.innerHTML = "Tumse na hopayega🤦‍♀️";
//     }
// }


// const form = document.getElementById("registerationform")


