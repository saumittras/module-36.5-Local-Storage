const addProduct = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const product = productName.value;
  const quantity = productQuantity.value;
  console.log(product, quantity);
  productName.value = "";
  productQuantity.value = "";

  localStorage.setItem(product, quantity);
  uldispaly(product, quantity);
};

const uldispaly = (product, quentity) => {
  const ul = document.getElementById("ul-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quentity}`;
  ul.append(li);
};
