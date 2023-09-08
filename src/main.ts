import { Cart, IProduct } from "./Cart";
import { PRODUCTS } from "./store";
import "./style.css";

const rootElement = document.querySelector("#app")!;

const cart = new Cart();

const footer = () => {
  let footerEl = document.querySelector(".footer");

  if (!footerEl) {
    footerEl = document.createElement("div");
    footerEl.className = "footer";
    rootElement.append(footerEl);
  }

  const footerContainer = document.createElement("div");
  footerContainer.className = "footerText";
  footerEl.innerHTML = "";
  footerEl.append(footerContainer);
  footerContainer.innerHTML =
    cart.total > 0 ? `Cart total: ${cart.total} GBP` : "Cart empty :(";
};

const initProduct = (product: IProduct) => {
  const element = document.createElement("div");

  element.id = `product_${product.id}`;

  element.className = "product";

  rootElement.append(element);

  const imageContainerEl = document.createElement("div");

  imageContainerEl.className = "productImage";

  const imageEl = document.createElement("div");

  imageEl.setAttribute("style", `background-image: url(${product.image})`);

  imageContainerEl.append(imageEl);

  const titleEl = document.createElement("div");

  titleEl.className = "title";

  titleEl.innerHTML = product.title;

  const priceEl = document.createElement("div");

  priceEl.className = "row";

  priceEl.innerHTML = `Price: <span>${product.price} GBP</span>`;

  const stockEl = document.createElement("div");

  stockEl.className = "row";

  stockEl.innerHTML = `Stock: <span>${
    product.stock - cart.getItemQuantity(product.id)
  }</span>`;

  const buttonEl = document.createElement("button");

  buttonEl.className = "productButton";

  buttonEl.innerHTML = cart.hasProduct(product.id)
    ? "Remove from cart"
    : "Add to cart";
  buttonEl.className = cart.hasProduct(product.id) ? "btn-red" : "btn-blue";

  buttonEl.addEventListener("click", (e) => {
    if (cart.hasProduct(product.id)) {
      cart.removeItem(product.id);
      buttonEl.className = "btn-blue";
      buttonEl.innerHTML = "Add to cart";
    } else {
      cart.addItem(product, 1);
      buttonEl.className = "btn-red";
      buttonEl.innerHTML = "Remove from cart";
    }
    stockEl.innerHTML = `Stock: <span>${
      product.stock - cart.getItemQuantity(product.id)
    }</span>`;
    footer();
  });

  element.append(imageContainerEl, titleEl, priceEl, stockEl, buttonEl);
};

PRODUCTS.forEach((product) => {
  initProduct(product);
});

footer();
