// Sample product data with prices in USD starting from $50
const products = [
  {
    name: "Bare Éclat",
    price: "$50.00",  // Updated price
    image: "images/chaininmouth.jpg",
    description: "Nude Radiance Redefined"
  },
  {
    name: "Chérie Tint",
    price: "$52.00",  // Updated price
    image: "images/applying.jpg",
    description: "Whisper of Bold, Elegance and Grace."
  },
  {
    name: "Obsidian Glow",
    price: "$51.00",  // Updated price
    image: "images/cleargloss.jpg",
    description: "High shine gloss."
  },
  {
    name: "Red Reverie",
    price: "$52.00",  // Updated price
    image: "images/strawberrylips.jpg",
    description: "A Passionate Red with French Sophistication."
  },
  {
    name: "Chanel Luxe",
    price: "$52.00",  // Updated price
    image: "images/chanelgloss.jpg",
    description: "For the Bold and Unforgettable."
  },
  {
    name: "Celeste Kiss",
    price: "$52.00",  // Updated price
    image: "images/chicmodel.jpg",
    description: "Whisper of Bold, Elegance and Grace."
  },
  {
    name: "Biege de Luxe",
    price: "$52.00",  // Updated price
    image: "images/gloss1.jpg",
    description: "Luxury Spin on a Classic Shade."
  },
  {
    name: "Almond Whisper",
    price: "$52.00",  // Updated price
    image: "images/glossapplic.jpg",
    description: "Warm and Neutral with a Touch of Softness."
  },
  {
    name: "Crème Veil",
    price: "$52.00",  // Updated price
    image: "images/lipgloss.jpg",
    description: "Soft and Sheer, Like a veil of Gloss."
  },
  {
    name: "Lumene Pink",
    price: "$52.00",  // Updated price
    image: "images/lumenepinkgloss.jpg",
    description: "Radiant Silky Texture With a Feel of Luxury."
  },
  {
    name: "Fleure",
    price: "$52.00",  // Updated price
    image: "images/modelredlips.jpg",
    description: "Inspired by Fresh Petals."
  },
  {
    name: "Purple and Red Delight",
    price: "$52.00",  // Updated price
    image: "images/purpleandredgloss.jpg",
    description: "Palette Delight...."
  },
  {
    name: "Skinergy",
    price: "$52.00",  // Updated price
    image: "images/skinergy gloss.jpg",
    description: "Drapes in Silky Texture."
  },
  {
    name: "Sugar Lips",
    price: "$52.00",  // Updated price
    image: "images/sugarlips.jpg",
    description: "Sweet Kiss."
  },
  {
    name: "Simply Bold",
    price: "$52.00",  // Updated price
    image: "images/wirelips.jpg",
    description: "Bold and Daring."
  },
  {
    name: "Berrylicious",
    price: "$51.00",  // Updated price
    image: "images/strawberrymouth.jpg",
    description: "Delicious Plight."
  },
  {
    name: "Garnet Glow",
    price: "$52.00",  // Updated price
    image: "images/girlapplying.jpg",
    description: "Opulent gem-like Shine."
  },
  {
    name: "L'Amour Rouge",
    price: "$52.00",  // Updated price
    image: "images/chanelredgloss.jpg",
    description: "The Red of True Love."
  },
  // Add more products here...
];

const cart = [];

function displayProducts() {
  const productGrid = document.querySelector(".product-grid");

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
  });
}

function addToCart(index) {
  const selectedProduct = products[index];
  cart.push(selectedProduct);
  alert(`${selectedProduct.name} has been added to your cart.`);
  saveCart(); // Save the cart to localStorage
  updateCart(); // Update cart display
}

function removeFromCart(index) {
  cart.splice(index, 1);  // Remove the item from the cart array
  alert("Item removed from cart.");
  saveCart(); // Save the cart to localStorage
  updateCart();  // Refresh the cart display
}

// Function to save the cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); // Convert cart to JSON string and save
}

function updateCart() {
  const cartContainer = document.querySelector(".cart-items");
  cartContainer.innerHTML = ""; // clear old content

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p id='empty-cart'>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <button onclick="removeFromCart(${cart.indexOf(item)})">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
  });
}


window.addEventListener("DOMContentLoaded", displayProducts);

  