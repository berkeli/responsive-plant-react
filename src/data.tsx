import { Product, Category } from './types';

export const products: Product[] = [
  { name: "I'm a product", price: 15, discount: 10, new: false, bestSeller: false, images: ['product1_1.png', 'product1_2.png'], cat: 0 },
  { name: "I'm a product", price: 30, discount: 0, new: false, bestSeller: true, images: ['product2_1.png', 'product2_2.png'], cat: 2 },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product3.png'], cat: 0 },
  { name: "I'm a product", price: 20, discount: 0, new: false, bestSeller: false, images: ['product4.png'], cat: 0 },
  { name: "I'm a product", price: 15, discount: 30, new: false, bestSeller: false, images: ['product5.png'], cat: 2 },
  { name: "I'm a product", price: 23, discount: 0, new: true, bestSeller: false, images: ['product6.png'], cat: 0 },
  { name: "I'm a product", price: 20, discount: 0, new: true, bestSeller: false, images: ['product7.png'], cat: 1 },
];

export const categories: Category[] = [
  { name: 'Cacti', image: 'cacti.png' },
  { name: 'Plants', image: 'plants.png' },
  { name: 'Succulents', image: 'succulents.png' },
];
