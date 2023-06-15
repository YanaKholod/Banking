import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./PaymentStyles";
import { ICONS, PaymentsIcon } from "../../constants/icons";

const PaymentsWidget = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    defaultValues: { IBAN: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Styled.Wrapper isFirst>
      <Styled.MainInfo>
        <div>
          <PaymentsIcon width="24px" height="24px" />
        </div>
        <b>Payments</b>
      </Styled.MainInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Requisites>
          <Styled.Input
            type="text"
            name="IBAN"
            placeholder="UAXXXXXXXXXXXXXXXXXXXXXXX"
            {...register("IBAN", { required: true, maxLength: 34 })}
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
          IBAN, EDRPOU, account number or owners name
        </Styled.Description>
      </form>
    </Styled.Wrapper>
  );
};

export default PaymentsWidget;
