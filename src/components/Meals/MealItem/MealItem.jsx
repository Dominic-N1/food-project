import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>{price}</p>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCarthandler} />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
