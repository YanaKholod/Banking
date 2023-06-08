import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    height: 64px;
    background-color: ${COLORS.HEADER_BACKGROUND};
    color: ${COLORS.TEXT};
  `,
};
const Header = () => {
  return (
    <Styled.Wrapper>
      {/* <img
        alt=""
        src="https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_5230763.png"
      /> */}
      <div>Header</div>
    </Styled.Wrapper>
  );
};

export default Header;
