import React from "react";
import { cards } from "../utils/cards";
import { NavLink } from "react-router-dom";
import { CardTransferIcon } from "../constants/icons";
import {
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  CardsBlock: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 5px;
    padding: 24px;
    h3 {
      line-height: 28px;
      font-weight: 600;
      font-size: 20px;
      margin: 0;
      margin-bottom: 8px;
    }
    img {
      width: 328px;
      height: 211px; //change with media
      border-radius: 10px;
      margin-right: 10px;
    }
  `,
  OneBlock: styled.div`
    margin: 5px 0px;
    padding: 10px;
    :hover {
      border-radius: 5px;
      background-color: ${COLORS.FOREGROUND};
    }
  `,
  CardInfo: styled(NavLink)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: white;
  `,
  CardDescription: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    p {
      color: rgba(255, 255, 255, 0.54);
    }
  `,
};
const Cards = () => {
  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <CardTransferIcon width="48px" height="48px" />
        </StyleMainImg>
        <div>
          <StyleTitle>Add card</StyleTitle>
        </div>
      </StyleHeader>
      <Styled.CardsBlock>
        <h3>Choose the product</h3>
        {cards.map((item) => (
          <Styled.OneBlock key={item.id}>
            <Styled.CardInfo to="">
              <img src={item.img} alt="" />
              <Styled.CardDescription>
                <div>{item.name}</div>
                <p>{item.description}</p>
              </Styled.CardDescription>
            </Styled.CardInfo>
          </Styled.OneBlock>
        ))}
      </Styled.CardsBlock>
    </StyleWrapper>
  );
};

export default Cards;
