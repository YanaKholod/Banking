import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { NavLink } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import LoginForm from "../pages/LoginForm";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/actions";

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
    cursor: pointer;
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
    cursor: pointer;

    /* :hover {

    } */
  `,
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
    }
  `,
  LoggedInButton: styled.div`
    display: flex;
    align-items: center;
  `,
  Logout: styled.button`
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
    margin-left: 20px;
    cursor: pointer;
  `,
};
const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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

  const logoutLogic = () => {
    dispatch(logout());
    setLoginModalVisible(false);
    setRegisterModalVisible(false);
  };
  return (
    <Styled.Wrapper>
      <Styled.Logo>Header</Styled.Logo>
      {!isLoggedIn ? (
        <div>
          <Styled.Buttons>
            <Styled.Login onClick={openLoginModal}>Login</Styled.Login>
            <Styled.Register onClick={openRegisterModal}>
              Register
            </Styled.Register>
          </Styled.Buttons>
          <Styled.CustomRodal
            width={320}
            height={330}
            visible={loginModalVisible}
            onClose={closeLoginModal}
          >
            <LoginForm closeLoginModal={closeLoginModal} />
          </Styled.CustomRodal>
          <Styled.CustomRodal
            width={320}
            height={400}
            visible={registerModalVisible}
            onClose={closeRegisterModal}
          >
            <RegistrationForm closeRegisterModal={closeRegisterModal} />
          </Styled.CustomRodal>
        </div>
      ) : (
        <Styled.LoggedInButton>
          <div>
            <h3>Hello, {user.fullName}!</h3>
          </div>
          <div>
            <Styled.Logout onClick={logoutLogic}>Logout</Styled.Logout>
          </div>
        </Styled.LoggedInButton>
      )}
    </Styled.Wrapper>
  );
};

export default Header;
