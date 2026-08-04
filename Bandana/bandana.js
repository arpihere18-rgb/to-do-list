const input = document.getElementById("taskinput");  // select gareako input vanne lai 
const tasklist = document.getElementById("tasklist");
const Totaltask = document.getElementById("totaltask");
const completedtask = document.getElementById("completedtask");

let total = 0;
let completed = 0;

function addTask() {
    let task = input.value   // task ko value yeta task ma store hunxa 

    if (task == "") {
        alert("please enter the task");
        return tasklist;    // khali vye pachi run hunna 
    }


    let li = document.createElement("li"); // create list item 
    li.innerText = task;   // task bhitra ko value dinxa inner task le 


    // create complete button 

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "complete";     // created the complete button 
    completeBtn.className = "completeBtn";


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";         // created the delete button 
    deleteBtn.className = "deleteBtn";

    let editBtn = document.createElement("button");
    editBtn.innerText = "edit";
    editBtn.className = "editBtn";


    // add button inside Li 
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn); // li is parent
    li.appendChild(editBtn);


    tasklist.appendChild(li);

    total++;
    Totaltask.innerText = total;



    input.value = "";  // remove the input value once used 


    completeBtn.onclick = function () {

        if (li.classList.contains("done")) {
            li.classList.remove("done");
            completed--;
        } else {
            li.classList.add("done");
            completed++;
        }

        completedtask.innerText = completed;
    };

    deleteBtn.onclick = function () {

        if (li.classList.contains("done")) {
            completed--;
            completedtask.innerText = completed;
        }
        total--;
        totaltask.innerText = total;

        li.remove();
    };

    editBtn.onclick = function () {
        let newtask = prompt("edit your task", task);

        if (newtask.trim() == "") {
            alert("Task cannot be empty");
            return;
        }
        task = newtask;
        li.firstChild.textContent = task;
    }



};
function cleartsk() {
    tasklist.innerHTML = "";
    total = 0;
    completed = 0;
    totaltask.innerText = total;
    completedtask.innerText = completed;


}


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }

});