import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menu } from "../utils/menu";
import { ICONS } from "../constants/icons";
import { COLORS } from "../constants/styled";

const Styled = {
  MenuWrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    font-size: 16px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 11%;
    bottom: 0;
    z-index: 999;
    width: 50%;
  `,
  ItemWrapper: styled(Link)`
    padding: 8px 10px;
    text-decoration: none;
    color: ${COLORS.TEXT};
    display: flex;
    align-items: center;
    cursor: pointer;
    /* width: 100%; */
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
    margin-left: 12px;
  `,
  Position: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  //   RightMenuItem: styled(Link)`
  //     text-decoration: none;
  //     color: white;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     padding: 8px 20px;
  //     width: 220px;
  //     /* hyphens: auto; */
  //     :hover {
  //       background-color: ${COLORS.HOVER};
  //     }
  //   `,
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
  RightMenuItem: styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 8px 20px;
    width: 220px;
    hyphens: auto;
    :hover {
      background-color: ${COLORS.HOVER};
    }
  `,
};

const BurgerMenu = () => {
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
      {menu.map((item, index) => (
        <div>
          <Styled.ItemWrapper
            key={item.id}
            to={item.link}
            onClick={() => toggleMenu(index)}
          >
            <Styled.MainSvg src={item.img} alt="" />
            <div>{item.name}</div>
            {item.submenu && (
              <div>
                <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
                <div>
                  {item.submenu ? (
                    <Styled.RightMenu>
                      {item.submenu.map((item) => {
                        <Styled.RightMenuItem key={item.id}>
                          {item.title}
                        </Styled.RightMenuItem>;
                      })}
                    </Styled.RightMenu>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            )}
          </Styled.ItemWrapper>
          {/* {subMenuItems &&
            subMenuItems.map((item) => (
              <Styled.RightMenuItem
                key={item.title}
                to={{
                  pathname: `${item.linkTo}`,
                }}
              >
                <Styled.MainSvg src={item.img} alt="" />
                <div>{item.title}</div>
              </Styled.RightMenuItem>
            ))} */}
        </div>
      ))}
    </Styled.MenuWrapper>
  );
};

export default BurgerMenu;
