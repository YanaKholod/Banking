import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = {};

const CardWidgets = () => {
  return (
    <div>
      <div>
        <h2>Digital cards form CatBank</h2>
        <img alt="" />
        <p>
          Credit limit up to 200 000 UAH. Issue and payments without commission.
        </p>
        <p>Issue and payments without commission</p>
        <Link to="">Look at the cards</Link>
      </div>
      <h2> Card of another bank of Ukraine and the world </h2>
      <img alt="" />
      <p>Pay quickly with your bank credits</p>
      <Link to="">Add card</Link>
    </div>
  );
};

export default CardWidgets;
