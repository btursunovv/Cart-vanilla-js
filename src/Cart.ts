export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  stock: number;
}

interface ICartItem {
  quantity: number;
  product: IProduct;
}

export class Cart {
  items: ICartItem[];

  static readonly STORAGE_KEY = "cart";

  constructor() {
    this.items = JSON.parse(localStorage.getItem(Cart.STORAGE_KEY) || "[]");
  }

  get count() {
    return this.items.length;
  }

  hasProduct(productId: number) {
    return this.items.some((item) => item.product.id === productId);
  }

  addItem(product: IProduct, quantity: number) {
    const newCartItem: ICartItem = {
      quantity: quantity,
      product: product,
    };
    this.items.push(newCartItem);
    this.saveCartState();
    // let newCart = {};
    // const newCartItem: IProduct = Object.assign(product, newCart);
    // newCartItem.quantity = quantity;
    // this.items.push(newCartItem);
  }

  get total() {
    return Number(
      this.items
        .reduce((acc, item) => acc + item.quantity * item.product.price, 0)
        .toFixed(2)
    );
  }

  removeItem(productId: number) {
    const index = this.items.findIndex((item) => item.product.id === productId);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.saveCartState();
  }

  saveCartState() {
    localStorage.setItem(Cart.STORAGE_KEY, JSON.stringify(this.items));
  }

  getItemQuantity(productId: number) {
    const cartItem = this.items.find((item) => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  }
}
