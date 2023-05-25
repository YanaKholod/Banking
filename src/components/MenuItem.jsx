import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { NavLink } from "react-router-dom";
import { menu } from "../utils/menu";

const Styled = {
  MenuItem: styled(NavLink)`
    text-decoration: none;
    padding-left: 25px;
    color: ${COLORS.TEXT};
  `,
  MenuItemString: styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    padding-left: 16px;
    height: 50px;
    cursor: pointer;
  `,
  MainSvg: styled.img`
    width: 32px;
    height: 32px;
  `,
  DropdownWrapper: styled.div`
    position: relative;
    width: 100%;
  `,
  DropdownMenuItem: styled.div`
    padding: 14px;
    cursor: pointer;
    position: relative;
    bottom: 0;
    right: 0;
    &:hover {
      background-color: #ddd;
    }
  `,
  DropdownMenu: styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 8px;
    height: 100vh;
    margin: 0;
    z-index: 100;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  `,
  Dropdown: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    border: none;
    padding-left: 25px;
    cursor: pointer;
  `,
  Svg: styled.img`
    width: 7px;
    height: 12px;
  `,
};
const MenuItem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {menu.map((item, index) => (
        <Styled.MenuItemString key={item.id} onClick={() => toggleMenu(index)}>
          <Styled.MainSvg src={item.img} alt="" />
          {item.submenu ? (
            <Styled.DropdownWrapper>
              <Styled.Dropdown>
                {item.name}
                <Styled.Svg
                  src="https://icons.veryicon.com/png/o/miscellaneous/8atour/arrow-right-50.png"
                  alt=""
                />
              </Styled.Dropdown>
              <Styled.DropdownMenu isOpen={openIndex === index}>
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
    </div>
  );
};

export default MenuItem;
