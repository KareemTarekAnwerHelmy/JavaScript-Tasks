const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  const row = document.createElement("tr");

  const doneCell = document.createElement("td");
  const doneCheckbox = document.createElement("input");
  doneCheckbox.type = "checkbox";
  doneCell.appendChild(doneCheckbox);

  const taskCell = document.createElement("td");
  taskCell.textContent = taskText;

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "🗑️";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  deleteCell.appendChild(deleteBtn);

  row.appendChild(doneCell);
  row.appendChild(taskCell);
  row.appendChild(deleteCell);

  taskList.appendChild(row);

  taskInput.value = "";
});
