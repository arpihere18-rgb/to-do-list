const input = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");
const totaltask = document.getElementById("totaltask");
const completedtask = document.getElementById("completedtask");
const PendingTask = document.getElementById("PendingTask");
const priorityInput = document.getElementById("priority");

let total = 0;
let completed = 0;

function updatePendingTask() {
    PendingTask.innerText = total - completed;
}

function addTask() {

    let task = input.value.trim();
    let priority = priorityInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = task;

    let priorityBadge = document.createElement("span");
    priorityBadge.innerText = priority;
    priorityBadge.className = "priority-badge";

    if (priority === "High") {
        priorityBadge.classList.add("high");
    } else if (priority === "Medium") {
        priorityBadge.classList.add("medium");
    } else {
        priorityBadge.classList.add("low");
    }

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "completeBtn";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "editBtn";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    li.appendChild(taskText);
    li.appendChild(priorityBadge);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    tasklist.appendChild(li);

    total++;
    totaltask.innerText = total;
    updatePendingTask();

    input.value = "";
    priorityInput.selectedIndex = 0;

    completeBtn.onclick = function () {

        if (li.classList.contains("done")) {
            li.classList.remove("done");
            completed--;
            completeBtn.innerText = "Complete";
        } else {
            li.classList.add("done");
            completed++;
            completeBtn.innerText = "Undo";
        }

        completedtask.innerText = completed;
        updatePendingTask();
    };

    deleteBtn.onclick = function () {

        if (confirm("Do you want to delete this task?")) {

            if (li.classList.contains("done")) {
                completed--;
                completedtask.innerText = completed;
            }

            total--;
            totaltask.innerText = total;
            updatePendingTask();

            li.remove();
        }
    };

    editBtn.onclick = function () {

        let newTask = prompt("Edit your task", taskText.innerText);

        if (newTask === null) return;

        newTask = newTask.trim();

        if (newTask === "") {
            alert("Task cannot be empty");
            return;
        }

        taskText.innerText = newTask;
    };
}

function cleartsk() {

    if (confirm("Clear all tasks?")) {

        tasklist.innerHTML = "";

        total = 0;
        completed = 0;

        totaltask.innerText = total;
        completedtask.innerText = completed;

        updatePendingTask();
    }
}

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});