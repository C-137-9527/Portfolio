// SECTION 8 SHOPPING CART

const products = document.querySelectorAll(".product");
const removeItemBTNs = document.querySelectorAll(".minusOne");
const cart = document.querySelector(".cart");
const totalAmount = document.querySelector(".cartContainer h4 span");

// DEFAULT PURCHASED ITEMS
const purchasedItems = [];

// ON CLICK PRODUCT
products.forEach((product) => product.addEventListener("click", cartHandler));

// ADD OR REMOVE CART ITEM FUNCTION
function cartHandler(e) {
  if (e.target.tagName !== "BUTTON") return;

  const button = e.target;
  const product = e.target.closest(".product");
  const productName = product.querySelector("h4").textContent;
  const productPrice = product.querySelector(".price").textContent;

  // CHECK IF PRODUCT IN CART FUNCTION
  const productIndex = purchasedItems.findIndex(
    (item) => item.productName === productName
  );

  // ADD BUTTON
  if (button.textContent === "+") {
    // IF PRODUCT ALREADY IN CART
    if (productIndex !== -1) {
      const item = purchasedItems[productIndex];
      item.totalQuantity++;
      item.totalPrice = productPrice * item.totalQuantity;
    }
    // IF PRODUCT NOT IN CART
    else {
      // CREATE PRODUCT OBJECT
      const setItem = {
        productName: productName,
        totalQuantity: 1,
        totalPrice: +productPrice,
      };
      // ADD OBJECT TO ARRAY
      purchasedItems.push(setItem);
    }
    // UPDATE CART LIST AND REMOVE BTN STYLE
    displayCartHandler();
    disableRemoveBTN();
  }

  // REMOVE BUTTON
  if (button.textContent === "-") {
    const item = purchasedItems[productIndex];

    if (item.totalQuantity > 1) {
      item.totalQuantity--;
      item.totalPrice = productPrice * item.totalQuantity;
    }
    // IF ONLY ONE UNIT LEFT, COMPLETELY REMOVE PRODUCT FROM CART
    else {
      purchasedItems.splice(productIndex, 1);
    }
    displayCartHandler();
    disableRemoveBTN();
  }
}

// LOOP AND DISPLAY BOUGHT ITEMS
function displayCartHandler() {
  cart.innerHTML = "";
  purchasedItems.map((item) => {
    cart.innerHTML += `<div class='boughtItem'>
    <span class='${item.productName}'></span> 
    <p>
    <span>${item.totalQuantity}</span>piece(s)
    </p>
    <p>subtotal: $
    <span>${item.totalPrice}</span>
    </p>
    </div>`;
  });
  totalAmount.textContent =
    "$" +
    purchasedItems.reduce(function (total, item) {
      return (total += item.totalPrice);
    }, 0);
}

// TOGGLE REMOVE BTN STYLE
function disableRemoveBTN() {
  removeItemBTNs.forEach((btn) => {
    const productName = btn.closest(".product").querySelector("h4").textContent;
    const productIndex = purchasedItems.findIndex(
      (item) => item.productName === productName
    );
    if (productIndex === -1) {
      btn.setAttribute("disabled", true);
      btn.classList.add("disabled");
    } else {
      btn.removeAttribute("disabled");
      btn.classList.remove("disabled");
    }
  });
}
disableRemoveBTN();

totalAmount.textContent = 0;
