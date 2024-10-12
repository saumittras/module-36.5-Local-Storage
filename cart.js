const addProduct = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value = "";
  productQuantity.value = "";

  dispalyItem(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const getShoppingCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const dispalyItem = (product, quentity) => {
  const ul = document.getElementById("ul-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quentity}`;
  ul.append(li);
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getShoppingCart();
  console.log(cart);
  cart[product] = quantity;
  console.log(cart);
  const cartStringifyed = JSON.stringify(cart);
  console.log(cartStringifyed);
  localStorage.setItem("cart", cartStringifyed);
};

const displayProductsfromLocalStorage = () => {
  const saveCart = getShoppingCart();
  console.log(saveCart);
  for (const product in saveCart) {
    const quantity = saveCart[product];
    console.log(product, quantity);
    dispalyItem(product, quantity);
  }
};

displayProductsfromLocalStorage();
