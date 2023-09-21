import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { Link, NavLink } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/actions";
import LoginModal from "../Forms/LoginModal";
import BurgerMenu from "./BurgerMenu";

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
  Logo: styled(Link)`
    img {
      padding-left: 20px;
      width: 65px;
      height: 55px;
    }
  `,
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
  Loading: styled.div`
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
  `,
  BurgerButton: styled.button`
    display: none;
    @media (max-width: 850px) {
      display: block;
      background-color: transparent;
      color: ${COLORS.ACCENT};
      border: none;
      cursor: pointer;
      font-size: 40px;
    }
  `,
  LogoLine: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const openLoginModal = () => {
    setLoginModalVisible(true);
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
      <Styled.LogoLine>
        <Styled.BurgerButton onClick={() => setIsOpenBurger(!isOpenBurger)}>
          ☰
        </Styled.BurgerButton>
        {isOpenBurger && <BurgerMenu />}
        {/* <Styled.BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        <Styled.Div></Styled.Div>
        <Styled.Div></Styled.Div>
        <Styled.Div></Styled.Div>
        {isOpen && <BurgerMenu />}
      </Styled.BurgerMenu> */}
        <Styled.Logo to="/">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/19452/cartoon-cat-face-clipart-md.png"
            alt=""
          />
        </Styled.Logo>
      </Styled.LogoLine>
      {!isLoggedIn ? (
        <div>
          <Styled.Buttons>
            <Styled.Login onClick={openLoginModal}>Login</Styled.Login>
            <Styled.Register onClick={openRegisterModal}>
              Register
            </Styled.Register>
          </Styled.Buttons>
          <LoginModal
            visible={loginModalVisible}
            onClose={() => setLoginModalVisible(false)}
          />
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
          {isLoading ? (
            <Styled.Loading>Wait...</Styled.Loading>
          ) : (
            <>
              {user ? (
                <Styled.Greeting>
                  <p>Hello, {user.fullName}!</p>
                  {user.role === "admin" && <span> Role: {user.role}</span>}
                </Styled.Greeting>
              ) : (
                <p></p>
              )}
              <div>
                {user && (
                  <>
                    <Styled.Logout onClick={logoutLogic}>Logout</Styled.Logout>
                    {user.role === "user" && (
                      <Styled.CustomButton to="/settings">
                        Settings
                      </Styled.CustomButton>
                    )}
                    {user.role === "admin" && (
                      <Styled.CustomButton to="admin/users">
                        Admin
                      </Styled.CustomButton>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </Styled.LoggedInButton>
      )}
    </Styled.Wrapper>
  );
};

export default Header;
