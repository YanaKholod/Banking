import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { NavLink } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 64px;
    background-color: ${COLORS.HEADER_BACKGROUND};
    color: ${COLORS.TEXT};
  `,
  Logo: styled.div``,
  Buttons: styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
  `,
  Login: styled(NavLink)`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    color: white;
    text-decoration: none;
    margin-right: 7px;
    /* :hover {

    } */
  `,
  Register: styled(NavLink)`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.ACCENT};
    margin-right: 12px;
    text-decoration: none;
    color: black;
    /* :hover {

    } */
  `,
};
const Header = () => {
  return (
    <Styled.Wrapper>
      {/* <img
        alt=""
        src="https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_5230763.png"
      /> */}
      <Styled.Logo>Header</Styled.Logo>
      <Styled.Buttons>
        <Styled.Login>Login</Styled.Login>
        <Styled.Register>Register</Styled.Register>
      </Styled.Buttons>
    </Styled.Wrapper>
  );
};

export default Header;
