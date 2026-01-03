var input = document.getElementById("todo-input");
var button = document.getElementById("add-todo-button");
var list = document.getElementById("todo-list");

button.addEventListener("click", function () {
  var text = input.value;

  if (text === "") {
    return;
  }

  var li = document.createElement("li");

  // checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // todo text
  var span = document.createElement("span");
  span.innerText = " " + text + " ";

  // delete button
  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  // checkbox click (mark done)
  checkbox.addEventListener("click", function () {
    if (checkbox.checked === true) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  // delete click (confirm first)
  delBtn.addEventListener("click", function () {
    var ok = confirm("Are you sure you want to delete?");
    if (ok === true) {
      list.removeChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});
