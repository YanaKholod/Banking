import React, { useState } from "react";
import { depositsCategories } from "../utils/deposits";
import styled from "styled-components";
import {
  StyleDescription,
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import { Link, NavLink } from "react-router-dom";
import { DepositsIcon, ICONS } from "../constants/icons";
import { COLORS } from "../constants/styled";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useSelector } from "react-redux";
import DepositForm from "../Forms/DepositForm";

const Styled = {
  MyDepositsWrapper: styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLORS.FOREGROUND};
    border-radius: 2px;
    margin-bottom: 16px;
    width: 100%;
    a {
      padding: 24px;
      text-decoration: none;
      font-size: 20px;
      font-weight: 400;
      height: 28px;
      line-height: 28px;
    }
  `,
  MyDeposits: styled(NavLink)`
    display: flex;
    align-items: center;
    margin: 0px 8px;
    color: ${COLORS.TEXT};
  `,
  RightArrow: styled.img`
    padding-left: 20px;
    width: 12px;
    height: 12px;
  `,
  OpenTheDeposit: styled.button`
    font-size: 15px;
    line-height: 1;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: ${COLORS.ACCENT};
    margin-right: 12px;
    color: black;
    margin-left: 20px;
    cursor: pointer;
  `,
  DepositsCategoriesWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  Category: styled(NavLink)`
    text-decoration: none;
    color: ${COLORS.TEXT};
    background-color: ${COLORS.FOREGROUND};
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin: 0 5px;
    div {
      :not(:first-child) {
        margin-top: 6px;
      }
    }
    :hover {
      background-color: ${COLORS.LIGHTER_FOREGROUND};
    }
  `,
  Strongbox: styled.div`
    display: flex;
    justify-content: space-between;
    color: ${COLORS.TEXT};
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 24px;
    h2 {
      font-size: 34px;
      line-height: 1.5;
      margin: 0;
    }
    ul {
      list-style: outside;
      padding-left: 20px;
      margin: 8px 0;
      margin: 16px 0;
      line-height: 24px;
    }
    b {
      margin: 16px 0;
    }
  `,
  StrongboxImg: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  MyDepositsSpan: styled.div`
    display: flex;
    margin: 16px 0px;
    a {
      text-decoration: none;
      color: ${COLORS.ACCENT};
    }
  `,
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
      .rodal-mask {
        background-color: rgba(0, 0, 0, 0.414);
      }
    }
  `,
};

const Deposits = () => {
  const { user } = useSelector((state) => state.auth);
  const [depositFormVisible, setDepositFormVisible] = useState(false);

  const closeDepositModal = () => {
    setDepositFormVisible(false);
  };
  const openDeposit = () => {
    setDepositFormVisible(true);
  };
  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <DepositsIcon width="48px" height="48px" />
        </StyleMainImg>
        <div>
          <StyleTitle>Deposits</StyleTitle>
          <StyleDescription>Manage your deposits online</StyleDescription>
        </div>
      </StyleHeader>
      <Styled.MyDepositsWrapper>
        <Styled.MyDeposits>
          My deposits
          <Styled.RightArrow alt="" src={ICONS.RIGHT_ARROW} />
        </Styled.MyDeposits>
        {user && (
          <Styled.OpenTheDeposit
            onClick={() => {
              openDeposit();
            }}
          >
            Open deposit
          </Styled.OpenTheDeposit>
        )}
      </Styled.MyDepositsWrapper>
      <Styled.DepositsCategoriesWrapper>
        {depositsCategories.map((item) => (
          <Styled.Category to key={item.id}>
            <div>{item.svg}</div>
            <div>{item.title}</div>
          </Styled.Category>
        ))}
      </Styled.DepositsCategoriesWrapper>
      <Styled.Strongbox>
        <div>
          <h2>Deposit operation in 60 seconds</h2>
          <div>
            <Styled.MyDepositsSpan>
              <Link to="">"My deposits" </Link>
              {/* replenishmennt link */}
              <span>are:</span>
            </Styled.MyDepositsSpan>
            <ul>
              <li>special application for depositors;</li>
              <li>simple and convenient interface;</li>
              <li>convenient management of deposits at any time.</li>
            </ul>
            <b>And you don't need to go to the branch </b>
          </div>
        </div>
        <Styled.StrongboxImg>
          <img
            alt=""
            src="https://i.ibb.co/z4D69nY/9357593be676e7cf5043-1.png"
          />
        </Styled.StrongboxImg>
      </Styled.Strongbox>
      {user && (
        <Styled.CustomRodal
          width={500}
          height={500}
          visible={depositFormVisible}
          onClose={closeDepositModal}
        >
          <DepositForm closeDepositModal={closeDepositModal} />
        </Styled.CustomRodal>
      )}
    </StyleWrapper>
  );
};

export default Deposits;
