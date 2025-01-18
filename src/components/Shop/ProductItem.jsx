
import React from "react";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCart } from "../../features/cart/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {

    dispatch(
      addItemToCart({
        id,
        title,
        price
      })
    )
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>Rs {price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button className={classes.btn} onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </Card>
    </li> 
  );
};

export default ProductItem;