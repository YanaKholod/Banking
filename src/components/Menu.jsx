import React from "react";
import { menu } from "../utils/menu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt="" />
            <Link to={item.link}>{item.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
