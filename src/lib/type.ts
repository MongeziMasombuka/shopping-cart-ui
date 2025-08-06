export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
  slug: string;
};

export type CartItem = Product & { qty: number };
