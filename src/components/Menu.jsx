import React, { useState } from "react";
import { menu } from "../utils/menu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  MenuWrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    width: 279px;
    margin-top: 10px;
  `,
  MenuItem: styled(NavLink)`
    text-decoration: none;
    padding-left: 35px;
    color: ${COLORS.TEXT};
  `,
  MenuItemString: styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    img {
      width: 32px;
      height: 32px;
    }
  `,
  DropdownWrapper: styled.div`
    position: relative;
  `,
  DropdownMenuItem: styled.div`
    padding: 0 26px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  `,
  DropdownMenu: styled.div`
    position: absolute;
    top: 20%;
    left: 100%;
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 8px 0;
    margin: 0;
    z-index: 100;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  `,
  Dropdown: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    border: none;
    padding-left: 35px;
  `,
};
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.MenuWrapper>
      {menu.map((item) => (
        <Styled.MenuItemString key={item.id} onClick={() => toggleMenu()}>
          <img src={item.img} alt="" />
          {item.submenu ? (
            <Styled.DropdownWrapper>
              <Styled.Dropdown>{item.name}</Styled.Dropdown>
              <Styled.DropdownMenu isOpen={isOpen}>
                {item.submenu.map((item) => (
                  <Styled.DropdownMenuItem key={item.title}>
                    {item.title}
                  </Styled.DropdownMenuItem>
                ))}
              </Styled.DropdownMenu>
            </Styled.DropdownWrapper>
          ) : (
            <p>
              <Styled.MenuItem to={item.link}>{item.name}</Styled.MenuItem>
            </p>
          )}
        </Styled.MenuItemString>
      ))}
    </Styled.MenuWrapper>
  );
};

export default Menu;
