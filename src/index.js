const form = document
  .getElementById("create-task-form")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });

const submitButton = document
  .getElementById("submitButton")
  .addEventListener("click", () => createNewTask());

const createNewToDo = () => {
  createNewTask();
  createNewDeleteButton();
};

function createNewTask() {
  const formInput = document.getElementById("new-task-description");
  const priority = document.getElementById("priority-select").value;
  const node = document.createElement("li");
  const textNode = document.createTextNode(formInput.value);
  node.className = `${priority}`;
  const form = document.getElementById("tasks");
  node.appendChild(textNode);
  form.appendChild(node);
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.addEventListener("click", () => node.remove());
  node.appendChild(deleteButton);
}
