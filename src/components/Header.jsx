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
    @media (max-width: 850px) {
      align-items: baseline;
      position: relative;
    }
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
    @media (max-width: 850px) {
      padding: 2px;
    }
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
    @media (max-width: 850px) {
      font-size: 14px;
      line-height: 1.5;
      padding: 5px 10px;
    }

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
    @media (max-width: 850px) {
      font-size: 14px;
      line-height: 1.5;
      padding: 5px 10px;
    }

    /* :hover {

    } */
  `,
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
      position: absolute;
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
    @media (max-width: 850px) {
      font-size: 14px;
      line-height: 1.5;
      padding: 4px 8px;
    }
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
    @media (max-width: 850px) {
      font-size: 14px;
      line-height: 1.5;
      padding: 4px 8px;
    }
  `,

  Greeting: styled.div`
    p {
      color: ${COLORS.LIGHTER_TEXT};
      margin-bottom: 3px;
    }
    span {
      color: ${COLORS.LIGHTER_TEXT};
    }
    @media (max-width: 470px) {
      display: none;
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
  MediaLine: styled.div`
    display: flex;
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
  const closeBurgerMenu = () => {
    setIsOpenBurger(false);
  };
  return (
    <Styled.Wrapper>
      <Styled.LogoLine>
        <Styled.BurgerButton onClick={() => setIsOpenBurger(!isOpenBurger)}>
          ☰
        </Styled.BurgerButton>
        {isOpenBurger && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}
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
              <Styled.MediaLine>
                {user && (
                  <>
                    <Styled.Logout onClick={logoutLogic}>Logout</Styled.Logout>
                    {/* {user.role === "user" && (
                      <Styled.CustomButton to="/settings">
                        Settings
                      </Styled.CustomButton>
                    )} */}
                    {user.role === "admin" && (
                      <Styled.CustomButton to="admin/users">
                        Admin
                      </Styled.CustomButton>
                    )}
                  </>
                )}
              </Styled.MediaLine>
            </>
          )}
        </Styled.LoggedInButton>
      )}
    </Styled.Wrapper>
  );
};

export default Header;
