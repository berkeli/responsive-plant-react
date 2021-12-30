import React, { useEffect } from 'react';
import { products, categories } from '../data';
import { Product, Category } from '../types';
import { useParams } from 'react-router-dom';
import '../css/shop.scss';
import '../css/styles.scss';

const ShopHero: React.FC = () => {
  return (
        <section className="hero">
            <h1>EVERYTHING THAT GROWS IN OUR GARDEN</h1>
            <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
            </p>
        </section>
  );
};

interface Props {
  products: Product[],
  categoryName: string | undefined
}

const ShopProducts: React.FC<Props> = (Props) => {
  return (
    <section>
    <h4>SHOP {Props.categoryName?.toUpperCase()}</h4>
    <div className="item-grid">
    {Props.products?.map((e:Product, i:number) => (
        <a href={`./product/${i}`} className={`product ${e.images.length > 1 ? 'withalt' : ''} ${e.new ? 'new' : ''} ${e.bestSeller ? 'best-seller' : ''}`}>
            <div>
                <img src={require(`../img/products/${e.images[0]}`)} alt={e.name} className="product-img"/>
                {e.images.length > 1 ? <img src={require(`../img/products/${e.images[1]}`)} className="alternative" alt={e.name}/> : {}}
                <p>{e.name}</p>                
                {e.discount ? <p className="price"><span className="old-price">${e.price}</span>${e.price - e.price * e.discount / 100}</p> : <p className="price">{e.price}</p>}      
                <p className="button">Add to Cart</p>
            </div>
        </a>



    ))}
    </div>
  </section>
  );
};

const Shop: React.FC = () => {
  const { category } = useParams();
  const catId: number = categories.findIndex((e:Category) => e.name === category);
  console.log(catId);
  let productsFiltered: Product[] = [];
  if (catId >= 0) {
    productsFiltered = products.filter((e:Product) => e.cat === catId);
  } else {
    productsFiltered = products;
  }
  useEffect(() => {
    window.scrollTo({ top:0 });
  });

  return (
        <main>
            <ShopHero />
            <ShopProducts products={productsFiltered} categoryName={category}/>
        </main>
  );
};

export default Shop;
