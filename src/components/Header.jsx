import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { Link, NavLink } from "react-router-dom";
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
      .rodal-mask {
        background-color: rgba(0, 0, 0, 0.414);
      }
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
    color: black;
    margin-left: 20px;
    cursor: pointer;
  `,
  CustomButton: styled(Link)`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 8px;
    margin-right: 10px;
    background-color: transparent;
    color: ${COLORS.ACCENT};
    border: 1px solid ${COLORS.ACCENT};
    text-decoration: none;
    cursor: pointer;
  `,

  Greeting: styled.div`
    p {
      color: ${COLORS.LIGHTER_TEXT};
      margin-bottom: 3px;
    }
    span {
      color: ${COLORS.LIGHTER_TEXT};
    }
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
          <Styled.Greeting>
            <p>Hello, {user.fullName}!</p>
            {user.role === "admin" && <span> Role: {user.role}</span>}
          </Styled.Greeting>
          <div>
            <Styled.Logout onClick={logoutLogic}>Logout</Styled.Logout>
            {user.role === "user" && (
              <Styled.CustomButton to="/settings">Settings</Styled.CustomButton>
            )}
            {user.role === "admin" && <Link to="admin">Companies</Link>}
          </div>
        </Styled.LoggedInButton>
      )}
    </Styled.Wrapper>
  );
};

export default Header;
