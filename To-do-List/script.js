"use stict";

let taskArray = [];
let task, taskCheck, getTasks, saveTasks, ggetTasks;

// Adding Activity
addTaskBtn.addEventListener("click", add);

function add() {
  if (taskInp.value) {
    console.log(taskInp.value);
    let found = taskArray.find(function (element) {
      return element.taskName === taskInp.value;
    });
    if (found) {
      alert("Task with same name already exists:");
    } else {
      task = taskInp.value;
      taskArray.push({ taskName: task, checkStatus: false });
      show();
    }
  } else {
    alert("Please enter a task😶");
  }
}
// Change Modes
function changeColor() {
  if (chgBtn.value === "Dark mode") {
    chgBtn.value = "Light mode";
    chgBtn.classList.remove("fa", "fa-moon");
    chgBtn.classList.add("fa-regular", "fa-lightbulb", "text-white");
    bdy.classList.add("mode--colors");
    ttle.classList.add("hOne");
    containerBox.classList.add("bgColor");
  } else if (chgBtn.value === "Light mode") {
    chgBtn.value = "Dark mode";
    chgBtn.classList.remove("fa-regular", "fa-lightbulb", "text-white");
    chgBtn.classList.add("fa", "fa-moon");
    bdy.classList.remove("mode--colors");
    ttle.classList.remove("hOne");
    containerBox.classList.remove("bgColor");
  }
}

function show() {
  tableBody.innerHTML = "";
  taskInp.value = "";
  taskArray.forEach(function (element, i) {
    tableBody.innerHTML += `<tr  ${
      element.checkStatus === true
        ? 'style="background-color:#173c42e0;"'
        : 'style="background-color:#262c30;"'
    }>
    <td>${i + 1}</td>
    <td>${element.taskName}</td>
    <td class="dataCheck" >${
      element.checkStatus === false
        ? "<i class='fa fa-x text-danger'></i>"
        : "<i class='fa fa-check text-success'></i>"
    }</td>
    <td>${
      element.checkStatus === false
        ? `<button class="btn btn-primary" onclick="checkOrUncheck(${i})">check</button>`
        : `<button class="btn btn-primary" onclick="checkOrUncheck(${i})">undo</button>`
    }</td>
    <td><button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button></td>
    </tr>`;
  });
  saveTasks = localStorage.setItem("to-do-list", JSON.stringify(taskArray));
}

function deleteTask(i) {
  taskArray.splice(i, 1);
  show();
}

function checkOrUncheck(i) {
  if (taskArray[i].checkStatus === false) {
    taskArray[i].checkStatus = true;
    show();
  } else if (taskArray[i].checkStatus === true) {
    taskArray[i].checkStatus = false;
    show();
  }
}

getTasks = localStorage.getItem("to-do-list");
function checkTasks() {
  if (getTasks) {
    ggetTasks = JSON.parse(getTasks);
    taskArray = ggetTasks;
    show();
  }
}
checkTasks();
