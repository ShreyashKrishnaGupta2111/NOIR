
const menuItems = [
  {
    id: 1, name: "Truffle Mushroom Toast", category: "Starters",
    price: 289, veg: true, badge: "CHEF'S PICK",
    tags: "Crispy · Earthy · Rich",
    description: "Golden sourdough, wild mushrooms, herbs and truffle.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2, name: "Crispy Lotus Stem", category: "Starters",
    price: 249, veg: true, badge: "CROWD FAVOURITE",
    tags: "Crunchy · Sweet chilli",
    description: "Crisp lotus stem tossed in a sweet sesame glaze.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3, name: "Smoky Paneer Tikka", category: "Starters",
    price: 329, veg: true, badge: "TANDOOR FRESH",
    tags: "Smoky · Spiced",
    description: "Char-grilled paneer, peppers and mint chutney.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4, name: "Classic Butter Chicken", category: "Mains",
    price: 429, veg: false, badge: "BESTSELLER",
    tags: "Creamy · Signature",
    description: "Tender chicken in a rich tomato-butter gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5, name: "Paneer Makhani", category: "Mains",
    price: 369, veg: true, badge: "HOUSE SPECIAL",
    tags: "Rich · Comforting",
    description: "Soft paneer in tomato and cashew gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6, name: "Dal Noir & Butter Naan", category: "Mains",
    price: 319, veg: true, badge: "COMFORT FOOD",
    tags: "Slow-cooked · Buttery",
    description: "Slow-cooked black lentils with butter naan.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7, name: "Garden Pesto Pizza", category: "Pizza & Pasta",
    price: 399, veg: true, badge: "HOUSE FAVOURITE",
    tags: "Fresh basil · Mozzarella",
    description: "Basil pesto, tomatoes, mozzarella and crisp crust.",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8, name: "Creamy Alfredo Pasta", category: "Pizza & Pasta",
    price: 379, veg: true, badge: "CREAMY CLASSIC",
    tags: "Silky · Parmesan",
    description: "Penne in a creamy parmesan sauce with herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9, name: "Noir Smash Burger", category: "Burgers",
    price: 349, veg: false, badge: "MUST TRY",
    tags: "Juicy · House sauce",
    description: "Seared patty, melted cheese, pickles and house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10, name: "Crispy Veg Burger", category: "Burgers",
    price: 279, veg: true, badge: "VEG FAVOURITE",
    tags: "Crunchy · Loaded",
    description: "Crunchy veggie patty with lettuce and chipotle mayo.",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11, name: "Chocolate Lava Cake", category: "Desserts",
    price: 229, veg: true, badge: "SWEET ENDING",
    tags: "Warm · Gooey",
    description: "Warm chocolate cake with a molten centre.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12, name: "Classic Cheesecake", category: "Desserts",
    price: 249, veg: true, badge: "HOUSE MADE",
    tags: "Creamy · Vanilla",
    description: "Baked cheesecake with a buttery biscuit base.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13, name: "Iced Caramel Latte", category: "Beverages",
    price: 189, veg: true, badge: "COFFEE BAR",
    tags: "Espresso · Caramel",
    description: "Chilled espresso, milk and caramel over ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14, name: "Masala Chai", category: "Beverages",
    price: 99, veg: true, badge: "INDIAN CLASSIC",
    tags: "Ginger · Cardamom",
    description: "Freshly brewed tea simmered with milk and spices.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15, name: "Mango Mint Cooler", category: "Beverages",
    price: 169, veg: true, badge: "REFRESHING",
    tags: "Mango · Fresh mint",
    description: "Mango cooler with fresh mint and citrus.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16, name: "Blueberry Mojito", category: "Beverages",
    price: 179, veg: true, badge: "ZERO-PROOF",
    tags: "Blueberry · Lime",
    description: "Blueberries, mint and lime with sparkling soda.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80"
  }
];

const categories = [
  "All", "Starters", "Mains",
  "Pizza & Pasta", "Burgers", "Desserts", "Beverages"
];

const cart = new Map();
let activeCategory = "All";
let searchTerm = "";

const $ = id => document.getElementById(id);

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

function renderCategories() {
  $("categories").innerHTML = categories.map(category => `
    <button class="category-button ${category === activeCategory ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderMenu() {
  const filtered = menuItems.filter(item => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const text = `${item.name} ${item.description} ${item.category} ${item.tags}`;

    return matchesCategory &&
      text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  $("foodGrid").innerHTML = filtered.map(item => `
    <article class="food-card">
      <div class="food-image-wrap">
        <img class="food-image"
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'">

        <span class="food-badge">
          <span class="diet-dot ${item.veg ? "" : "nonveg"}"></span>
          ${item.badge}
        </span>
      </div>

      <div class="food-info">
        <div class="food-title-row">
          <h3 class="food-title">${item.name}</h3>
          <span class="food-price">${money(item.price)}</span>
        </div>

        <p class="food-description">${item.description}</p>

        <div class="food-bottom">
          <span class="food-tags">${item.tags}</span>
          <button class="add-button" data-add="${item.id}">＋ ADD</button>
        </div>
      </div>
    </article>
  `).join("");

  $("resultCount").textContent =
    `${filtered.length} DELICIOUS ${filtered.length === 1 ? "CHOICE" : "CHOICES"}`;

  $("emptyState").classList.toggle("hidden", filtered.length !== 0);
}

function addToCart(id) {
  const item = menuItems.find(food => food.id === id);
  if (!item) return;

  const current = cart.get(id);

  cart.set(id, {
    item,
    qty: current ? current.qty + 1 : 1
  });

  renderCart();
}

function changeQuantity(id, delta) {
  const current = cart.get(id);
  if (!current) return;

  current.qty += delta;

  if (current.qty <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, current);
  }

  renderCart();
}

function getTotals() {
  let count = 0;
  let subtotal = 0;

  cart.forEach(({ item, qty }) => {
    count += qty;
    subtotal += item.price * qty;
  });

  return { count, subtotal };
}

function renderCart() {
  const { count, subtotal } = getTotals();

  $("cartCount").textContent = count;
  $("mobileCartCount").textContent =
    `${count} item${count === 1 ? "" : "s"} ↗`;
  $("mobileCartTotal").textContent = money(subtotal);

  $("mobileCart").classList.toggle("hidden", count === 0);
  $("subtotal").textContent = money(subtotal);
  $("total").textContent = money(subtotal);

  if (cart.size === 0) {
    $("cartItems").innerHTML = `
      <div class="cart-empty">
        Your order is looking a little empty.<br>
        Let's fix that with something delicious.
      </div>`;
    return;
  }

  $("cartItems").innerHTML = [...cart.values()].map(({ item, qty }) => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}">

      <div>
        <h4>${item.name}</h4>
        <span class="cart-price">${money(item.price * qty)}</span>

        <div class="quantity-controls">
          <button data-qty="${item.id}" data-delta="-1"
            aria-label="Remove one">−</button>
          <span>${qty}</span>
          <button data-qty="${item.id}" data-delta="1"
            aria-label="Add one">+</button>
        </div>
      </div>

      <span class="cart-price">${money(item.price)}</span>
    </div>
  `).join("");
}

function openCart() {
  $("cartDrawer").classList.add("open");
  $("cartDrawer").setAttribute("aria-hidden", "false");
  $("cartBackdrop").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("cartDrawer").setAttribute("aria-hidden", "true");
  $("cartBackdrop").classList.remove("show");
  document.body.style.overflow = "";
}

function placeDemoOrder() {
  if (cart.size === 0) {
    alert("Your cart is empty. Add something delicious first!");
    return;
  }

  const table = $("tableNumber").value;

  if (!table) {
    $("tableNumber").focus();
    alert("Please choose your table number.");
    return;
  }

  const { count, subtotal } = getTotals();

  const reference =
    "NOIR-" + Math.random().toString(36).slice(2, 7).toUpperCase();

  $("successMessage").textContent =
    `Your demo order for Table ${table} is ready for preview.`;

  $("orderReference").textContent =
    `Reference: ${reference} | Items: ${count} | Subtotal: ${money(subtotal)} | Note: ${$("orderNote").value.trim() || "None"}`;

  closeCart();
  $("successModal").classList.remove("hidden");
}

$("categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

$("foodGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));

  button.textContent = "✓ ADDED";

  setTimeout(() => {
    if (button.isConnected) button.textContent = "＋ ADD";
  }, 800);
});

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (!button) return;

  changeQuantity(
    Number(button.dataset.qty),
    Number(button.dataset.delta)
  );
});

$("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value;
  renderMenu();
});

$("openCart").addEventListener("click", openCart);
$("mobileCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartBackdrop").addEventListener("click", closeCart);

$("checkoutButton").addEventListener("click", placeDemoOrder);

$("closeModal").addEventListener("click", () => {
  $("successModal").classList.add("hidden");
});

$("doneButton").addEventListener("click", () => {
  $("successModal").classList.add("hidden");
});

$("successModal").addEventListener("click", event => {
  if (event.target === $("successModal")) {
    $("successModal").classList.add("hidden");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    $("successModal").classList.add("hidden");
  }
});

$("year").textContent = new Date().getFullYear();

// QR links such as your-site-url/?table=4 preselect Table 4.
const params = new URLSearchParams(window.location.search);
const requestedTable = params.get("table");

if (
  requestedTable &&
  [...$("tableNumber").options].some(
    option => option.value === requestedTable
  )
) {
  $("tableNumber").value = requestedTable;
}

renderCategories();
renderMenu();
renderCart();
