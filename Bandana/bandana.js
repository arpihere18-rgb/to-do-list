const input = document.getElementById("taskInput");
const tasklist = document.getElementById("taskList");

function addTask() {

    let task = input.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "completeBtn";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    tasklist.appendChild(li);

    input.value = "";

    completeBtn.onclick = function () {
        li.classList.toggle("done");
    };
    deleteBtn.onclick = function () {
        li.remove();
    };

    function clearTask() {
        tasklist.innerHTML = "";
    }
}