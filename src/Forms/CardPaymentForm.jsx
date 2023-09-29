import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { Styled } from "../constants/formStyled";
import { getCurrentUser, makePayment } from "../redux/auth/actions";
import { toast } from "react-toastify";

const StyledForm = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    width: 90%;
  `,
  Select: styled.select`
    margin-top: 5px;
    padding: 5px;
    font-size: 17px;
    background-color: transparent;
    border: 1px solid ${COLORS.LIGHTER_TEXT};
    border-radius: 4px;
    color: ${COLORS.TEXT};
  `,
};
const cardInputsData = [
  {
    id: 0,
    inputType: "hidden",
    labelName: "",
    placeholder: "",
    inputName: "id",
  },
  {
    id: 1,
    inputType: "text",
    inputName: "sender",
    labelName: "Sender",
    placeholder: "Enter sender",
    isDisabled: true,
  },
  {
    id: 3,
    inputType: "text",
    inputName: "cardNumber",
    labelName: "Card number",
    placeholder: "Enter card number",
  },
  {
    id: 4,
    inputType: "number",
    labelName: "Sum",
    placeholder: "00.00",
    inputName: "sum",
    inputMode: "decimal",
  },
  {
    id: 5,
    inputType: "text",
    inputName: "purpose",
    labelName: "Purpose",
    placeholder: "Enter purpose",
  },
];
const CardPaymentForm = ({ card, closeCardModal }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const currentUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (card && currentUser) {
      setValue("sender", currentUser.fullName || "");
      setValue("cardNumber", card || "");
      setValue("id", currentUser.id);
    }
  }, [card, currentUser, setValue]);

  const onSubmit = async (data) => {
    const numericSum = parseFloat(data.sum);
    const formatCardNumber = (inputCardNumber) => {
      const cardNumber = inputCardNumber.replace(/\s/g, "");
      const formatted = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
      return formatted;
    };
    const formattedCardNumber = formatCardNumber(data.cardNumber);
    await dispatch(
      makePayment({
        recipientCardNumber: formattedCardNumber,
        senderUserId: data.id,
        amount: numericSum,
        purpose: data.purpose,
        senderCardType: selectedCard.cardType,
      })
    );

    toast.success("Payment successful");

    await dispatch(getCurrentUser());
    closeCardModal();
  };

  const resetForm = () => {
    reset({ sum: "", purpose: "" });
    closeCardModal();
  };

  return (
    <Styled.Wrapper>
      <p> Card Payment</p>
      <StyledForm.Form onSubmit={handleSubmit(onSubmit)}>
        {cardInputsData.map((item) => (
          <Styled.Field key={item.id}>
            <Styled.Label>{item.labelName}</Styled.Label>
            <Styled.Input
              type={item.inputType}
              {...register(item.inputName, { required: true })}
              placeholder={item.placeholder}
              disabled={item.isDisabled}
            />
          </Styled.Field>
        ))}
        <Styled.Field>
          {currentUser.cards && currentUser.cards.length > 0 ? (
            <StyledForm.Select
              {...register("selectedCard", { required: true })}
              onChange={(e) => {
                const selectedCardId = e.target.value;
                const cardObject = currentUser.cards.find(
                  (card) => card._id === selectedCardId
                );
                setSelectedCard(cardObject);
              }}
            >
              <option value="">Select card</option>
              {currentUser.cards.map((card) => (
                <option key={card._id} value={card._id}>
                  {card.cardType} - {card.balance} UAH
                </option>
              ))}
            </StyledForm.Select>
          ) : (
            <p>No cards available</p>
          )}
        </Styled.Field>
        <Styled.ButtonLine>
          <Styled.Button
            onClick={() => {
              resetForm();
            }}
          >
            Cancel
          </Styled.Button>
          <Styled.Button type="submit" disabled={!isValid}>
            Submit
          </Styled.Button>
        </Styled.ButtonLine>
      </StyledForm.Form>
    </Styled.Wrapper>
  );
};

export default CardPaymentForm;
