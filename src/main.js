import 'bootstrap';
import css from "./main.scss";

const tasks = [];
const tasksList = document.querySelector(".todo-list");
const addTaskButton = document.querySelector(".add-task_btn");
const input = document.querySelector(".add-task_input");

addTaskButton.onclick = handleClickAdd;
tasksList.onclick = handleClickRemove;

function setTaskTemplate(task) {
  return `
  <li class="todo-item" id="${tasks.indexOf(task)}">
 ${task}
 <button class="todo-button_delete">Удалить</button>
   </li>
  `;
}

function render() {
  tasksList.innerHTML = "";
  for (const task of tasks) {
    tasksList.innerHTML += setTaskTemplate(task);
  }
  console.log(tasks);
}

function handleClickAdd() {
  if (!input.value) {
    alert(`Pls enter some task`);
  } else {
    tasks.push(input.value);
    render();
    input.value="";
  }
}

function handleClickRemove(e) {
  if (e.target.tagName === "BUTTON") {
    const parent = e.target.parentNode;
    tasks.splice(parent.id, 1);
    render();
  }
}
