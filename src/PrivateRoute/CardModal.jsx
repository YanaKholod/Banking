import React from "react";
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
  Img: styled.img`
    width: 200px;
    height: 120px;
  `,
};
const CardModal = ({ card }) => {
  const currentUser = useSelector((state) => state.auth.user);
  console.log("currentUser", currentUser);
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
    console.log({ ...data, user: currentUser });
  };

  return (
    <StyledCards.Wrapper>
      <div>
        <StyledCards.Img src={card.img}></StyledCards.Img>
        <div>{card.description}</div>
      </div>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {/* {companyInputsData.map((item) => (
            <Styled.Field key={item.id}>
              <Styled.Label>{item.labelName}</Styled.Label>
              <Styled.Input
                type={item.inputType}
                {...register(item.inputName, item.validationRules)}
                placeholder={item.placeholder}
                disabled={item.isDisabled}
                inputMode={item.inputMode}
                {...(item.inputName === "sum" && {
                  onKeyPress: (e) => {
                    const allowedCharacters = /[0-9.]/;
                    if (!allowedCharacters.test(e.key)) {
                      e.preventDefault();
                    } else if (e.key === "." && e.target.value.includes(".")) {
                      e.preventDefault();
                    }
                  },
                })}
              />
            </Styled.Field>
          ))} */}
        <Styled.ButtonLine>
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
        </Styled.ButtonLine>
      </Styled.Form>
    </StyledCards.Wrapper>
  );
};

export default CardModal;
