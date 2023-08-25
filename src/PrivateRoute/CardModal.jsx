import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Styled } from "../constants/formStyled";

const StyledCards = {
  Wrapper: styled.div`
    width: 100%;
    /* background-color: ${COLORS.LIGHTER_FOREGROUND}; */
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin: 0;
    text-align: center;
    padding: 15px;
    /* @media (max-width: 550px) {
      width: 250px;
    } */
  `,

  Img: styled.img`
    width: 270px;
    height: 170px;
    border-radius: 5px;
  `,
  CardName: styled.div`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 70px;
  `,
  CardInfoOverlay: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    text-align: center;
    color: #0a0a0a;
    padding: 20px;
    div {
      font-size: 18px;
      font-weight: 600;
    }
  `,
  Input: styled.input`
    width: 100%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
    color: black;
    background: transparent;
    margin: 0px;
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
  `,
  AdditionalInfo: styled.div`
    margin-top: 20px;
    text-align: start;
    color: ${COLORS.LIGHTER_TEXT};
    margin-bottom: 10px;
    input {
      margin-top: 7px;
      color: ${COLORS.LIGHTER_TEXT};
      border-bottom: 1px solid ${COLORS.HOVER};
    }
  `,
  ButtonLine: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    margin-top: 20px;
  `,
  Description: styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    text-align: start;
    margin-top: 20px;
  `,
};
const CardModal = ({ card }) => {
  const currentUser = useSelector((state) => state.auth.user);

  // console.log("currentUser", currentUser);
  console.log("card", card);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    //logic for transaction
    //dispatch an action for adding transaction from user to company
    console.log("data", data);
    console.log({
      ...data,
      user: currentUser,
      card: {
        cardType: data.cardType,
        cardNumber: data.cardNumber,
        balance: data.balance,
      },
    });
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    return randomNumber.toString().padStart(4, "0");
  };

  const generateRandomCreditCardNumber = () => {
    const groups = Array.from({ length: 4 }, generateRandomNumber);
    return groups.join(" ");
  };

  return (
    <StyledCards.Wrapper>
      <StyledCards.Form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ position: "relative" }}>
          <StyledCards.CardInfoOverlay>
            <StyledCards.CardName>
              <StyledCards.Input
                type="text"
                name="cardType"
                {...register("cardType")}
                defaultValue={card.cardType}
                // defaultValue={card.cardType}
                // {...register(card.cardType)}
                disabled
              />
            </StyledCards.CardName>
            <div>
              <StyledCards.Input
                type="text"
                name="cardNumber"
                {...register("cardNumber")}
                defaultValue={generateRandomCreditCardNumber()}
                // defaultValue={generateRandomCreditCardNumber()}
                disabled
              />
            </div>
          </StyledCards.CardInfoOverlay>
          <StyledCards.Img src={card.img}></StyledCards.Img>
        </div>
        <StyledCards.Description>{card.description}</StyledCards.Description>

        <StyledCards.AdditionalInfo>
          <label>Balance:</label>
          <StyledCards.Input
            type="text"
            name="balance"
            // defaultValue={card.balance}
            {...register("balance")}
            defaultValue={card.balance}
            disabled
          />
        </StyledCards.AdditionalInfo>

        <StyledCards.ButtonLine>
          <Styled.Button
          //   onClick={() => {
          //     resetForm();
          //   }}
          >
            Cancel
          </Styled.Button>
          <Styled.Button type="submit" disabled={!isValid}>
            Submit
          </Styled.Button>
        </StyledCards.ButtonLine>
      </StyledCards.Form>
    </StyledCards.Wrapper>
  );
};

export default CardModal;
