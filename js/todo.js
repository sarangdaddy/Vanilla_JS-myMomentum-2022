const toDoInput = document.querySelector(".todo-input");
const toDoValue = toDoInput.querySelector("input");
const toDoList = document.querySelector(".todo-list");

let toDos = [];

const TODOS_KET = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KET, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerHtml = `i`;
  button.className = "fa-solid fa-delete-left";
  button.addEventListener("click", toDoDelete);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(deleteFilter);
  function deleteFilter(toDo) {
    return toDo.id !== parseInt(li.id);
  }
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoValue.value;
  toDoValue.value = "";
  const newToDoOj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoOj);
  paintToDo(newToDoOj); //funtion에서 저장한 값을 다른 funtion에 보내서 사용
  saveToDos();
}

toDoInput.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KET);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
