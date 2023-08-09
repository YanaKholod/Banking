import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { NavLink } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import LoginForm from "../pages/LoginForm";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 64px;
    background-color: ${COLORS.HEADER_BACKGROUND};
    color: ${COLORS.TEXT};
    /* z-index: 998; */
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
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
    }
  `,
};
const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const openRegisterModal = () => {
    setRegisterModalVisible(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalVisible(false);
  };
  return (
    <Styled.Wrapper>
      <Styled.Logo>Header</Styled.Logo>
      <Styled.Buttons>
        <Styled.Login onClick={openLoginModal}>Login</Styled.Login>
        <Styled.Register onClick={openRegisterModal}>Register</Styled.Register>
      </Styled.Buttons>
      <Styled.CustomRodal
        width={320}
        height={330}
        visible={loginModalVisible}
        onClose={closeLoginModal}
      >
        <LoginForm />
      </Styled.CustomRodal>
      <Styled.CustomRodal
        width={320}
        height={400}
        visible={registerModalVisible}
        onClose={closeRegisterModal}
      >
        <RegistrationForm />
      </Styled.CustomRodal>
    </Styled.Wrapper>
  );
};

export default Header;
