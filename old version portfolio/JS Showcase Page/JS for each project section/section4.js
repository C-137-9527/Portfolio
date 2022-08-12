// SECTION 4 CRUD WITH FIREBASE

// VARIABLES
const memoInput = document.querySelector(".addMemo input");
const addMemoBTN = document.querySelector(".addMemo button");
const displayMemo = document.querySelector(".displayMemo");
const memoMessage = document.querySelector(".memoMessage");

// CREATE MEMO LIST FUNCTION
const createMemoLists = (memo) => {
  displayMemo.innerHTML += `<div class='memo' data-id='${memo.id}'><span contenteditable>${memo.task}</span><div><button class='memoUpdate'>update</button> <button  class='memoDelete'>delete</button></div></div>`;
};

// FETCH: GET EXISTING DATA FROM BATABASE ON PAGE LOAD
const fetchMemo = (async () => {
  memoMessage.textContent = "loading...";

  const response = await fetch(
    "https://test-425f7-default-rtdb.firebaseio.com/memo.json"
  );

  if (!response.ok) alert("something went wrong, try again later!");

  const data = await response.json();

  // LOOP DATA AND OUTPUT LISTS
  for (const key in data) {
    createMemoLists({ task: data[key], id: key });
  }

  // CHECK IF THERE IS ANY EXISTING MEMO
  if (!displayMemo.children.length) {
    memoMessage.textContent = "You have no memo!";
  } else {
    memoMessage.innerHTML = "click on the memo content to <span>edit</span>!";
  }
})();

//  FETCH: POST NEW DATA TO DATABASE
const addMemo = () => {
  if (
    memoInput.value.trim().length === 0 ||
    memoInput.value.trim().length > 8
  ) {
    alert("You Shall Not Pass...unless enter 1-8 characters");
    return;
  }

  // POST DATA TO SERVER
  (async () => {
    await fetch("https://test-425f7-default-rtdb.firebaseio.com/memo.json", {
      method: "POST",
      body: JSON.stringify(memoInput.value),
      headers: { "Content-Type": "application/json" },
    });
    // RELOAD PAGE TO GET DATA FROM SERVER, WITH SERVER GENERATED ID
    window.location.reload();
  })();
};
addMemoBTN.addEventListener("click", addMemo);
memoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addMemo();
  }
});

// FETCH PUT AND DELETE
const update_delete_memo = async (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const button = e.target;
  const memo = button.closest(".memo");
  const memoContent = memo.querySelector("span").textContent;
  const memoId = memo.dataset.id;

  // FETCH PUT: CHANGE EXISTING MEMO CONTENT
  if (button.textContent === "update") {
    if (memoContent.trim().length === 0 || memoContent.trim().length > 8) {
      alert("1-8 characters only thank you");
      return;
    }

    (async () => {
      await fetch(
        `https://test-425f7-default-rtdb.firebaseio.com/memo/${memoId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(memoContent),
          headers: { "Content-Type": "application/json" },
        }
      );
      // RELOAD PAGE TO UPDATE LIST
      window.location.reload();
    })();
  }

  // FETCH: DELETE MEMO
  if (button.textContent === "delete") {
    (async () => {
      await fetch(
        `https://test-425f7-default-rtdb.firebaseio.com/memo/${memoId}.json`,
        {
          method: "DELETE",
        }
      );
      // RELOAD PAGE TO UPDATE DATA
      window.location.reload();
    })();
  }
};
displayMemo.addEventListener("click", update_delete_memo);
