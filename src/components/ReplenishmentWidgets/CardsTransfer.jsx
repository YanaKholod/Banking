import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./PaymentStyles";
import { CardTransferIcon } from "../../constants/icons";

const CardsTransfer = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: { cardNumber: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Styled.Wrapper isFirst>
      <Styled.MainInfo>
        <div>
          <CardTransferIcon height="24px" width="24px" />
        </div>
        <b>Transfer to card</b>
      </Styled.MainInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Requisites>
          <Styled.Input
            type="text"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber", { required: true, maxLength: 16 })}
          />
          <Styled.Button type="submit">
            <svg
              height="24px"
              width="24px"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"
                  fill="rgba(255, 255, 255, 0.87)"
                  fillRule="nonzero"
                ></path>
                <path d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </Styled.Button>
        </Styled.Requisites>
        <Styled.Description>
          VISA/MasterCard of Ukrainian and foreign banks
        </Styled.Description>
      </form>
    </Styled.Wrapper>
  );
};

export default CardsTransfer;
