import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Styled } from "../constants/formStyled";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyById } from "../redux/companies/actions";
import { getCurrentUser, updateTransaction } from "../redux/auth/actions";

const companyInputsData = [
  {
    id: 30,
    inputType: "hidden",
    labelName: "",
    placeholder: "",
    inputName: "id",
  },
  {
    id: 0,
    inputType: "text",
    inputName: "companyName",
    labelName: "Company name",
    placeholder: "Enter company name",
    isDisabled: true,
  },
  {
    id: 1,
    inputType: "text",
    inputName: "iban",
    labelName: "Iban",
    placeholder: "Enter Iban",
    isDisabled: true,
  },
  {
    id: 2,
    inputType: "text",
    labelName: "Edpnou",
    placeholder: "Enter edpnou",
    inputName: "edpnou",
    isDisabled: true,
  },
  {
    id: 3,
    inputType: "text",
    labelName: "Country code",
    placeholder: "Enter country code",
    inputName: "countryCode",
    isDisabled: true,
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
    labelName: "Purpose of payment",
    placeholder: "Enter purpose",
    inputName: "purpose",
  },
];

const StyledForm = {
  MainWrapper: styled.div`
    height: 100vh;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    width: 90%;
  `,
};

const PaymentForm = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const companyForTransaction = useSelector(
    (state) => state.companies.companyForTransaction
  );
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchCompanyById(companyId));
    }
  }, [dispatch, currentUser]);

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
    const numericSum = parseFloat(data.sum);
    dispatch(
      updateTransaction({
        user: currentUser,
        selectedCard: data.selectedCard,
        transactionInfo: {
          purpose: data.purpose,
          sum: numericSum,
        },
        company: {
          id: data.id,
        },
      })
    );
    dispatch(getCurrentUser());
  };
  const resetForm = () => {
    reset({ sum: "", purpose: "" });
  };
  useEffect(() => {
    if (companyForTransaction) {
      setValue("id", companyForTransaction._id);
      setValue("companyName", companyForTransaction.companyName || "");
      setValue("countryCode", companyForTransaction.countryCode || "");
      setValue("iban", companyForTransaction.iban || "");
      setValue("edpnou", companyForTransaction.edpnou || "");
    }
  }, [companyForTransaction, setValue]);

  return (
    <StyledForm.MainWrapper>
      <Styled.Wrapper>
        <p>Payment</p>
        <StyledForm.Form onSubmit={handleSubmit(onSubmit)}>
          {companyInputsData.map((item) => (
            <Styled.Field key={item.id}>
              <Styled.Label>{item.labelName}</Styled.Label>
              <Styled.Input
                type={item.inputType}
                {...register(item.inputName, { required: true })}
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
          ))}
          <Styled.Field>
            <Styled.Label>Select card</Styled.Label>
            {currentUser.cards && currentUser.cards.length > 0 ? (
              <select {...register("selectedCard", { required: true })}>
                <option value="">Select a card</option>
                {currentUser.cards.map((card) => (
                  <option key={card._id} value={card._id}>
                    {card.cardType} - {card.balance} UAH
                  </option>
                ))}
              </select>
            ) : (
              <p>No cards available</p>
            )}{" "}
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
    </StyledForm.MainWrapper>
  );
};

export default PaymentForm;
