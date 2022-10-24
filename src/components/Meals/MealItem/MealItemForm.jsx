import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amoutInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const entredAmount = amoutInputRef.current.value.trim();
    const entredAmountNumber = +entredAmount;
    if (
      entredAmount.length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(entredAmountNumber);
  };

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amoutInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount from 1 to 5.</p>}
    </form>
  );
};

export default MealItemForm;
