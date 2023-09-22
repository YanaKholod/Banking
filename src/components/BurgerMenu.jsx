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
    width: 50%;
    z-index: 500;
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
  RightMenu: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: ${COLORS.MENU_BACKGROUND};
    color: ${COLORS.TEXT};
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    padding: 16px 0px;
    border-left: 1px solid grey;
    @media (max-width: 850px) {
      background-color: ${COLORS.MENU_BACKGROUND};
      color: ${COLORS.TEXT};
      z-index: 999;
    }
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
    @media (max-width: 850px) {
      background-color: ${COLORS.MENU_BACKGROUND};
      color: ${COLORS.TEXT};
      z-index: 999;
    }
  `,
  RightMenuItemWrapper: styled.div`
    position: relative;
  `,
};

const BurgerMenu = ({ closeBurgerMenu }) => {
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
        <div key={item.name}>
          <Styled.RightMenuItemWrapper>
            <Styled.ItemWrapper
              to={item.link}
              onClick={() => {
                toggleMenu(index);
                if (!item.submenu) {
                  closeBurgerMenu();
                }
              }}
            >
              <Styled.MainSvg src={item.img} alt="" />
              <div>{item.name}</div>
              {item.submenu && (
                <div>
                  <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
                </div>
              )}
            </Styled.ItemWrapper>
            {item.submenu && (
              <Styled.RightMenu isOpen={openIndex === index}>
                {item.submenu.map((submenuItem) => (
                  <Styled.RightMenuItem
                    key={submenuItem.id}
                    to={submenuItem.linkTo}
                    onClick={() => {
                      closeBurgerMenu();
                    }}
                  >
                    <Styled.MainSvg src={submenuItem.img} alt="" />
                    <div>{submenuItem.title}</div>
                  </Styled.RightMenuItem>
                ))}
              </Styled.RightMenu>
            )}
          </Styled.RightMenuItemWrapper>
        </div>
      ))}
    </Styled.MenuWrapper>
  );
};
//   return (
//     <Styled.MenuWrapper>
//       {menu.map((item, index) => (
//         <div key={item.id}>
//           <Styled.ItemWrapper to={item.link} onClick={() => toggleMenu(index)}>
//             <Styled.MainSvg src={item.img} alt="" />
//             <div>{item.name}</div>
//             {item.submenu && (
//               <div>
//                 <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
//                 <div>
//                   {item.submenu ? (
//                     <Styled.RightMenu>
//                       {item.submenu.map((item) => (
//                         <Styled.RightMenuItem key={item.id}>
//                           {item.title}
//                         </Styled.RightMenuItem>
//                       ))}
//                     </Styled.RightMenu>
//                   ) : (
//                     <div></div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </Styled.ItemWrapper>
//           {/* {subMenuItems &&
//             subMenuItems.map((item) => (
//               <Styled.RightMenuItem
//                 key={item.title}
//                 to={{
//                   pathname: `${item.linkTo}`,
//                 }}
//               >
//                 <Styled.MainSvg src={item.img} alt="" />
//                 <div>{item.title}</div>
//               </Styled.RightMenuItem>
//             ))} */}
//         </div>
//       ))}
//     </Styled.MenuWrapper>
//   );
// };

export default BurgerMenu;
