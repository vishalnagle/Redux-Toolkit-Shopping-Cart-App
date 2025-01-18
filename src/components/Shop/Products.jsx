import React, { useState} from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "i1",
    price: 150,
    title: "Chocolate",
    description: "50-90% Cocoa Solids, Cocoa Butter, and Sugar.",
  },
  {
    id: "i2",
    price: 180,
    title: "Cake",
    description:
      "Flour, Leaveners, Sugar, Milk or Cream, Chocolate and Cacao Powder.",
  },
  {
    id: "i3",
    price: 120,
    title: "Sweets",
    description: "Cashews, Water, Ghee, Sugar, refined wheat flour",
  },
];

const Products = () => {

  const [products, setProducts] = useState(DUMMY_PRODUCTS);



  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;