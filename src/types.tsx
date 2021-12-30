export type Product = { 
  name: string, 
  price: number, 
  discount: number, 
  new: boolean, 
  bestSeller: boolean, 
  images: string[], 
  cat: number 
};
  
export type Category = {
  name: string,
  image: string 
};