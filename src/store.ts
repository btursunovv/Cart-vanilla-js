import { IProduct } from "./Cart";

export const PRODUCTS: IProduct[] = [
  {
    id: 0,
    title: "Apple",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3474&q=80",
    price: 120,
    stock: 10,
  },
  {
    id: 1,
    title: "Banana",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80",
    price: 80,
    stock: 12,
  },
  {
    id: 2,
    title: "Pineapple",
    image:
      "https://images.unsplash.com/photo-1572859704906-ab0716da285f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3343&q=80",
    price: 180,
    stock: 5,
  },
];
