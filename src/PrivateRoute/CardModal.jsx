import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Styled } from "../constants/formStyled";
import { updateCurrentUserCard } from "../redux/auth/actions";
import { toast } from "react-toastify";

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
const CardModal = ({ card, closeCardModal }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    return randomNumber.toString().padStart(4, "0");
  };

  const generateRandomCreditCardNumber = () => {
    const groups = Array.from({ length: 4 }, generateRandomNumber);
    return groups.join(" ");
  };

  useEffect(() => {
    if (card) {
      setValue("cardType", card.cardType || "");
      setValue("cardNumber", generateRandomCreditCardNumber() || "");
      setValue("balance", card.balance || "");
    }
  }, [card, setValue]);

  const resetForm = () => {
    closeCardModal();
  };

  const onSubmit = async (data) => {
    if (currentUser) {
      await dispatch(updateCurrentUserCard({ card: data, user: currentUser }));
    }
    if (error) {
      toast.error(error);
    } else {
      toast.success("Card added");
    }
    closeCardModal();
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
                disabled
              />
            </StyledCards.CardName>
            <div>
              <StyledCards.Input
                type="text"
                name="cardNumber"
                {...register("cardNumber")}
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
            {...register("balance")}
            disabled
          />
        </StyledCards.AdditionalInfo>

        <StyledCards.ButtonLine>
          <Styled.Button
            onClick={() => {
              resetForm();
            }}
          >
            Cancel
          </Styled.Button>
          <Styled.Button type="submit">Submit</Styled.Button>
        </StyledCards.ButtonLine>
      </StyledCards.Form>
    </StyledCards.Wrapper>
  );
};

export default CardModal;
