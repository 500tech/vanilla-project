const page = document.querySelector("#todos-section");
const todosList = page.querySelector("ul");
const todosAdder = page.querySelector("#todo-adder");

function validateForm() {
  const isValid = todosAdder.checkValidity();
  todosAdder.querySelector("button").disabled = !isValid;
  return isValid;
}

function doForAllListItems(callback) {
  for (let item of todosList.querySelectorAll("li")) {
    callback(item);
  }
}

function createItem(text) {
  const item = document.createElement("li");
  item.tabIndex = 0;
  item.append(document.createTextNode(text));
  return item;
}

function addItem(text) {
  const item = createItem(text);
  todosList.prepend(item);
}

function interactWithItem(e, shouldDelete, shouldToggle) {
  if (e.target.tagName === "LI") {
    const item = e.target;
    if (shouldDelete(e)) {
      item.remove();
    } else if (shouldToggle(e)) {
      item.classList.toggle("done");
    }
  }
}

todosList.addEventListener("click", e =>
  interactWithItem(
    e,
    e => e.metaKey,
    e => !e.metaKey
  )
);

todosList.addEventListener("keydown", e =>
  interactWithItem(
    e,
    e => e.code === "Backspace",
    e => e.code === "Space"
  )
);

page.querySelector("#mark-done").addEventListener("click", () => {
  doForAllListItems(item => item.classList.add("done"));
});
page.querySelector("#delete-done").addEventListener("click", () => {
  doForAllListItems(item => {
    if (item.classList.contains("done")) {
      item.remove();
    }
  });
});

validateForm();
todosAdder.addEventListener("input", validateForm);
todosAdder.addEventListener("submit", e => {
  e.preventDefault();
  const { todo } = todosAdder;
  addItem(todo.value);
  todosAdder.reset();
  validateForm();
});
