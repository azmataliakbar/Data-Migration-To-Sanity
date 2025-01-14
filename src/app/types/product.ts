// src/app/types/products.ts

export interface Product {
  _id: string;
  name: string;
  price: number;
  slug: string;
  imageURL: string;
  description: string;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  priceWithoutDiscount: number;
  discountPercentage: number;
}