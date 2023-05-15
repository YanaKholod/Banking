import React from "react";
import { cards } from "../utils/cards";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.privat24.ua/icons/file/ServiceCard.svg" alt="" />
        <div>
          <h2>Add card</h2>
        </div>
        <div>
          {cards.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <NavLink>
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
