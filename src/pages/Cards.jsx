import React from "react";
import { cards } from "../utils/cards";
import { NavLink } from "react-router-dom";
import { CardTransferIcon } from "../constants/icons";

const Cards = () => {
  return (
    <div>
      <div>
        <CardTransferIcon width="48px" height="48px" />
        <div>
          <h2>Add card</h2>
        </div>
        <div>
          {cards.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <NavLink to="">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
