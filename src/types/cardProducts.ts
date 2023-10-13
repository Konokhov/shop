export interface CartProducts {
  id: number;
  userId: number;
  date: string;
  products: Products[];
  __v: number;
}

export interface Products {
  productId: number;
  quantity: number;
}
