import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Styled } from "../constants/formStyled";
import { addDeposit } from "../redux/auth/actions";

export const DepositStyled = {
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
  Block: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
  `,
};
const depositInputsData = [
  {
    id: 0,
    inputType: "select",
    inputName: "depositType",
    labelName: "Deposit type",
    options: [
      { label: "Standart - 14%", depositType: "Standart", interestRate: 14 },
      { label: "Junior - 12.5%", depositType: "Junior", interestRate: 12.5 },
      {
        label: "Treasure box - 12%",
        depositType: "Treasure box",
        interestRate: 12,
      },
    ],
  },
  {
    id: 1,
    inputType: "select",
    inputName: "depositTerm",
    labelName: "Deposit term",
    options: ["1 year", "2 years", "3 years"],
  },
  {
    id: 2,
    inputType: "number",
    labelName: "Sum",
    placeholder: "00.00",
    inputName: "sum",
    inputMode: "decimal",
  },
];

const DepositForm = ({ closeDepositModal }) => {
  const user = useSelector((state) => state.auth.user);
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data) => {
    const selectedCardId = selectedCard ? selectedCard._id : null;
    const part = data.depositType.split(" - ")[1];
    const numberWithoutPercent = parseFloat(part.slice(0, -1));

    const depositData = {
      userId: user.id,
      sumOfDeposit: parseFloat(data.sum),
      fromCard: {
        cardType: selectedCard ? selectedCard.cardType : "",
        id: selectedCardId,
      },
      depositType: data.depositType,
      interestRate: numberWithoutPercent,
    };
    await dispatch(addDeposit(depositData));
    toast.success("Deposit was added");
    await closeDepositModal();
  };

  const resetForm = () => {
    reset();
    closeDepositModal();
  };

  return (
    <Styled.Wrapper>
      <p>Registration of a deposit</p>
      <DepositStyled.Form onSubmit={handleSubmit(onSubmit)}>
        {depositInputsData.map((input) => (
          <Styled.Field key={input.id}>
            {input.inputType === "select" ? (
              <DepositStyled.Block>
                <Styled.Label>{input.labelName}</Styled.Label>
                <DepositStyled.Select
                  {...register(input.inputName, { required: true })}
                >
                  <option value="">Select {input.labelName}</option>
                  {input.options.map((option) =>
                    option.label ? (
                      <option key={option.label} value={option.label}>
                        {option.label}
                      </option>
                    ) : (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </DepositStyled.Select>
              </DepositStyled.Block>
            ) : (
              <>
                <Styled.Label>{input.labelName}</Styled.Label>
                <Styled.Input
                  type={input.inputType}
                  {...register(input.inputName, { required: true })}
                  placeholder={input.placeholder}
                />
              </>
            )}
          </Styled.Field>
        ))}
        <Styled.Field>
          {user.cards && user.cards.length > 0 ? (
            <DepositStyled.Select
              {...register("selectedCard", { required: true })}
              onChange={(e) => {
                const selectedCardId = e.target.value;
                const cardObject = user.cards.find(
                  (card) => card._id === selectedCardId
                );
                setSelectedCard(cardObject);
              }}
            >
              <option value="">Select card</option>
              {user.cards.map((card) => (
                <option key={card._id} value={card._id}>
                  {card.cardType} - {card.balance} UAH
                </option>
              ))}
            </DepositStyled.Select>
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
      </DepositStyled.Form>
    </Styled.Wrapper>
  );
};

export default DepositForm;
