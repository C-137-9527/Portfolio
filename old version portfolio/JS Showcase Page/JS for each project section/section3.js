/* SECTION 3 LOCAL STORAGE */

const taskInput = document.querySelector(".addItemContainer input");
const addBTN = document.querySelector(".addItemContainer button");
const taskOutput = document.querySelector(".taskOutput");

// DEFAULT DATA STORAGE
let localList = [];

// CREATE NEW LIST FUNCTION
const addItems = (task) => {
  taskOutput.innerHTML += `<div class='itemContainer'><p>${task}</p><div> <button>finish</button><button>delete</button></div></div>`;
};

// ON LOAD, CHECK LOCAL STORAGE
window.addEventListener("load", () => {
  if (localStorage.getItem("localList") !== null) {
    // GET LOCAL DATA
    localList = JSON.parse(localStorage.getItem("localList"));
    // LOOP DATA AND OUTPUT LISTS
    localList.map((item) => {
      addItems(item.key);
    });
  }
});

// ADD NEW ITEM FUNCTION
function addTaskHandler() {
  const enteredTask = taskInput.value;

  // ENTRY VALIDATION
  if (enteredTask.trim().length === 0 || enteredTask.length > 8) {
    alert("please enter 1-8 characters");
    return;
  }

  // UPDATE LOCAL STORAGE
  const object = { key: taskInput.value };
  localList.push(object);
  localStorage.setItem("localList", JSON.stringify(localList));

  // OUTPUT NEW LIST
  addItems(taskInput.value);

  // RESET INPUT FIELD
  taskInput.value = "";
}
addBTN.addEventListener("click", addTaskHandler);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskHandler();
  }
});

// FINISH OR REMOVE CURRENT TASK
taskOutput.addEventListener("click", (e) => {
  const currentItemContainer = e.target.closest(".itemContainer");

  // FINISH BUTTON
  if (e.target.tagName === "BUTTON" && e.target.textContent === "finish")
    currentItemContainer.firstChild.classList.toggle("crossOut");

  // REMOVE BUTTON
  if (e.target.tagName === "BUTTON" && e.target.textContent === "delete") {
    // REMOVE LOCAL STORAGE
    localList = JSON.parse(localStorage.getItem("localList"));
    localList = localList.filter(
      (item) => item.key !== currentItemContainer.firstChild.textContent
    );
    localStorage.setItem("localList", JSON.stringify(localList));

    // REMOVE CURRENT ITEM
    currentItemContainer.remove();
  }
});
