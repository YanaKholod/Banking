import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { menu } from "../utils/menu";
import { NavLink } from "react-router-dom";
import { ICONS } from "../constants/icons";

const Styled = {
  MenuWrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    font-size: 16px;
    display: flex;
    position: relative;
  `,
  LeftMenu: styled.div`
    width: 270px;
    padding: 16px 0;
  `,
  RightMenu: styled.div`
    position: absolute;
    right: -97%;
    top: 0;
    bottom: 0;
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    z-index: 998;
    padding: 16px 0px;
    border-left: 1px solid grey;
  `,
  RightMenuItem: styled.div`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    width: 220px;
    hyphens: auto;
    :hover {
      background-color: ${COLORS.HOVER};
    }
  `,
  ItemWrapper: styled(NavLink)`
    padding: 8px 20px;
    text-decoration: none;
    color: ${COLORS.TEXT};
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    :hover {
      background-color: ${COLORS.HOVER};
    }
  `,
  MainSvg: styled.img`
    width: 32px;
    height: 32px;
    padding-right: 15px;
  `,
  Svg: styled.img`
    width: 12px;
    height: 12px;
    filter: contrast(150%);
  `,
  Position: styled.div`
    margin-left: auto;
  `,
};
const Menu = () => {
  const [subMenuItems, setSubmenuItems] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setSubmenuItems(null);
    } else {
      setOpenIndex(index);
      if (menu[index].submenu) {
        setSubmenuItems(menu[index].submenu);
      }
    }
  };

  return (
    <Styled.MenuWrapper>
      <Styled.LeftMenu>
        {menu.map((item, index) => (
          <Styled.MenuWrapper key={item.id}>
            <Styled.ItemWrapper
              to={item.link}
              onClick={() => toggleMenu(index)}
            >
              <Styled.MainSvg src={item.img} alt="" />
              <div>{item.name}</div>
              {item.submenu ? (
                <Styled.Position>
                  <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
                </Styled.Position>
              ) : (
                <div></div>
              )}
            </Styled.ItemWrapper>
          </Styled.MenuWrapper>
        ))}
      </Styled.LeftMenu>
      {subMenuItems && (
        <Styled.RightMenu isOpen={subMenuItems}>
          {subMenuItems.map((item) => (
            <Styled.RightMenuItem key={item.title}>
              <Styled.MainSvg src={item.img} alt="" />
              <div>{item.title}</div>
            </Styled.RightMenuItem>
          ))}
        </Styled.RightMenu>
      )}
    </Styled.MenuWrapper>
  );
};

export default Menu;
