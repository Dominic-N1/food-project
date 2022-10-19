import React from "react";
import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <React.Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>{price}</p>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
