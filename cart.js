const cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCartPage() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsContainer.appendChild(itemDiv);

    total += parseFloat(item.price.replace("$", "").replace(",", ""));
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartPage();
}

window.addEventListener("DOMContentLoaded", displayCartPage);
