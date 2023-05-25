import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import MenuItem from "./MenuItem";

const Styled = {
  MenuWrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    width: 279px;
    margin-top: 10px;
    padding: 15px 0;
    font-size: 16px;
  `,
};
const Menu = () => {
  return (
    <Styled.MenuWrapper>
      <MenuItem />
    </Styled.MenuWrapper>
  );
};

export default Menu;
