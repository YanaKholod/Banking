import React, { useState } from "react";
import { menu } from "../utils/menu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = {
  DropdownWrapper: styled.div`
    position: relative;
  `,
};
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt="" />
            {item.submenu ? (
              <div>
                <div onClick={() => toggleMenu()}> {item.name}</div>
                <div isOpen={isOpen}>
                  {item.submenu.map((item) => (
                    <div key={item.title}>{item.title}</div>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={item.link}>{item.name}</Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

// const DropdownWrapper = styled.div`
//   position: relative;
// `;

// const DropdownButton = styled.button`
//   background-color: #f5f5f5;
//   color: #333;
//   padding: 8px 16px;
//   border: none;
//   cursor: pointer;
// `;

// const DropdownMenu = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   list-style-type: none;
//   background-color: #f5f5f5;
//   padding: 8px 0;
//   margin: 0;
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
// `;

// const DropdownMenuItem = styled.li`
//   padding: 8px 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #ddd;
//   }
// `;
