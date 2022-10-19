import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <figure className={classes["main-image"]}>
        <figcaption>Meals</figcaption>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </figure>
    </React.Fragment>
  );
};

export default Header;
