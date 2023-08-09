import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./PaymentStyles";
import { MobileRenevalIcon, UkraineIcon } from "../../constants/icons";

const MobileRenewal = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    defaultValues: { phoneNumber: "" },
  });

  const onSubmit = (data) => {
    const formattedPhoneNumber = `+380${data.phoneNumber}`;
    console.log(formattedPhoneNumber);

    reset();
  };

  return (
    <Styled.Wrapper>
      <Styled.MainInfo>
        <div>
          <MobileRenevalIcon width="24px" height="24px" />
        </div>
        <b> Renewal of mobile</b>
      </Styled.MainInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Requisites>
          <div>
            <UkraineIcon height="16px" width="16px" />
          </div>
          <Styled.Select>
            <option>+380</option>
          </Styled.Select>
          <Styled.Input
            type="phone"
            name="phoneNumber"
            placeholder="000000000"
            {...register("phoneNumber", {
              required: true,
              maxLength: 9,
            })}
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
      </form>
    </Styled.Wrapper>
  );
};

export default MobileRenewal;
