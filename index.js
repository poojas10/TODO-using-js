var input = document.querySelector("input");
// ADDING INPUT VALUE TO LIST
function clickMe(e) {
  if (e.keyCode === 13 || (e.type == "click" && input.value != "")) {
    e.preventDefault();
    var userInput = input.value;
    var list = document.createElement("li");
    list.textContent = userInput;
    // list.append(anchor);
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-list";
    deleteBtn.textContent = "X";
    list.append(deleteBtn);
    document.querySelector("ol").append(list);
    deleteBtn.addEventListener("click", cb);
    // if clicked on the list then change the color of the focused list element
    for (let i = 0; i < document.querySelector("ol").children.length; i++) {
      document.querySelector("ol").children[i].addEventListener("click", done);
    }
  }
}
function themeChange() {
  document.querySelector("body").classList.toggle("hey");
}

// FUNCTIONS TO CALL WHEN PRESSED ENTER KEY
function events(eventType, callback) {
  input.addEventListener(eventType, callback);
}
events("keydown", clickMe);
events("keydown", clear);
document.querySelector(".btn").addEventListener("click", clickMe);
document.querySelector(".btn").addEventListener("click", clear);
// CLEARING INPUT AFTER ADDING IT TO THE LIST
function clear(e) {
  if (e.keyCode === 13 || e.type == "click") {
    input.value = "";
  }
}

// FADE AWAY LIST EFFECT AND REMOVE IT FROM HTML AFTER DELETING IT
function cb(e) {
  e.target.parentElement.classList.add("transition");
  // CALLING FUNCTION AND PASSING TARGET ELEMENT(DELETE BUTTON) AS ARGUEMENT
  setTimeout(removeElement, 1000, e.target);
}
function removeElement(e) {
  // REMOVING TARGET'S i.e LI FROM HTML
  e.parentElement.remove();
}

function done(e) {
  e.target.classList.add("task-done");
}
