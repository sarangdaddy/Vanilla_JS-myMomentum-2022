const toDoInput = document.querySelector(".todo-input");
const toDoValue = toDoInput.querySelector("input");
const toDoList = document.querySelector(".todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", ToDoDelete);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function ToDoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoValue.value;
  toDoValue.value = "";
  paintToDo(newToDo);
  console.log(newToDo); //funtion에서 저장한 값을 다른 funtion에 보내서 사용
}

toDoInput.addEventListener("submit", handleToDoSubmit);
