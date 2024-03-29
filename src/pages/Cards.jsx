import React, { useState } from "react";
import { cards } from "../utils/cards";
import { CardTransferIcon } from "../constants/icons";
import {
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import CardModal from "../Forms/CardModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginModal from "../Forms/LoginModal";
import { CustomRodal } from "../utils/generalStyled";

const Styled = {
  CardsBlock: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 5px;
    padding: 24px;
    @media (min-width: 1300px) {
      height: 100vh;
      justify-content: space-around;
    }
    h3 {
      line-height: 28px;
      font-weight: 600;
      font-size: 20px;
      margin: 0;
      margin-bottom: 8px;
    }
    img {
      width: 328px;
      height: 211px;
      border-radius: 10px;
      margin-right: 10px;
      @media (max-width: 850px) {
        width: 228px;
        height: 111px;
      }
    }
  `,
  OneBlock: styled(Link)`
    text-decoration: none;
    margin: 5px 0px;
    padding: 10px;
    :hover {
      border-radius: 5px;
      background-color: ${COLORS.FOREGROUND};
    }
  `,
  CardInfo: styled.div`
    display: flex;
    /* flex-direction: row; */
    text-decoration: none;
    color: white;
  `,
  CardDescription: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    p {
      color: ${COLORS.LIGHTER_TEXT};
    }
  `,
};

const Cards = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  // const openCardModal = (card) => {
  //   setSelectedCard(card);
  //   setOpenModal(true);
  // };
  const logicBlockOpen = (card) => {
    if (!isLoggedIn) {
      setLoginModalVisible(true);
    } else {
      setSelectedCard(card);
      setOpenModal(true);
    }
  };
  const closeCardModal = () => {
    setOpenModal(false);

    setSelectedCard(null);
  };

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
          <Styled.OneBlock
            key={item.id}
            onClick={() => {
              logicBlockOpen(item);
            }}
          >
            <Styled.CardInfo>
              <img src={item.img} alt="" />
              <Styled.CardDescription>
                <div>{item.name}</div>
                <p>{item.description}</p>
              </Styled.CardDescription>
            </Styled.CardInfo>
          </Styled.OneBlock>
        ))}
      </Styled.CardsBlock>
      {user && (
        <CustomRodal
          visible={selectedCard !== null && isOpenModal}
          onClose={closeCardModal}
        >
          {selectedCard && (
            <CardModal card={selectedCard} closeCardModal={closeCardModal} />
          )}
        </CustomRodal>
      )}
      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
    </StyleWrapper>
  );
};

export default Cards;
