import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Styled } from "../constants/formStyled";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyById } from "../redux/companies/actions";
import { getCurrentUser, updateTransaction } from "../redux/auth/actions";
import { COLORS } from "../constants/styled";
import { toast } from "react-toastify";

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

const PaymentForm = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);
  const companyForTransaction = useSelector(
    (state) => state.companies.companyForTransaction
  );
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (companyId && user) {
      dispatch(fetchCompanyById(companyId));
    }
  }, [dispatch, user, companyId]);

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
    if (companyForTransaction) {
      setValue("id", companyForTransaction._id);
      setValue("companyName", companyForTransaction.companyName || "");
      setValue("countryCode", companyForTransaction.countryCode || "");
      setValue("iban", companyForTransaction.iban || "");
      setValue("edpnou", companyForTransaction.edpnou || "");
    }
  }, [companyForTransaction, setValue]);

  const onSubmit = async (data) => {
    const numericSum = parseFloat(data.sum);
    try {
      await dispatch(
        updateTransaction({
          user: user,
          selectedCard: {
            cardId: selectedCard._id,
            cardType: selectedCard.cardType,
          },
          transactionInfo: {
            purpose: data.purpose,
            sum: numericSum,
          },
          company: {
            id: data.id,
          },
        })
      );
      toast.success("Payment successful");

      await dispatch(getCurrentUser());

      navigate("/");
    } catch (reduxError) {
      toast.error(reduxError);
    }
  };

  const resetForm = () => {
    reset({ sum: "", purpose: "" });
  };

  return (
    <StyledForm.MainWrapper>
      {user && (
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
                      } else if (
                        e.key === "." &&
                        e.target.value.includes(".")
                      ) {
                        e.preventDefault();
                      }
                    },
                  })}
                />
              </Styled.Field>
            ))}
            <Styled.Field>
              {user.cards && user.cards.length > 0 ? (
                <StyledForm.Select
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
      )}
    </StyledForm.MainWrapper>
  );
};

export default PaymentForm;
