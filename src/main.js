import "bootstrap";
import css from "./main.scss";

const tasks = [];
const tasksList = document.querySelector(".todos-list");
const addTaskButton = document.querySelector(".add-task_btn");
const input = document.querySelector(".add-task_input");

addTaskButton.onclick = handleClickAdd;
tasksList.onclick = handleClickRemove;

addTaskButton.addEventListener("input", () => {
  if (input.value.trim().length > 0) {
    console.log(1);
    addTaskButton.disabled = false;
  } else {
    addTaskButton.disabled = true;
    console.log(2);
  }
});

function setTaskTemplate(task) {
  return `
  <li class="todo-item pb-2 border-bottom row justify-content-between" id="${tasks.indexOf(
    task
  )}">
 <div class="col-4">
  ${task}
  </div>
 <button class="todo-button_delete btn btn-outline-danger col-md-auto">
 <i class="bi bi-trash"></i> Удалить </button>
   </li>
  `;
}

function render() {
  tasksList.innerHTML = "";
  for (const task of tasks) {
    tasksList.innerHTML += setTaskTemplate(task);
  }
}

function handleClickAdd() {
  this.blur();
  if (input.value.trim().length) {
    tasks.push(input.value);
    render();
    input.value = "";
  }
}

function handleClickRemove(e) {
  if (e.target.tagName === "BUTTON") {
    const parent = e.target.parentNode;
    tasks.splice(parent.id, 1);
    render();
  }
}
