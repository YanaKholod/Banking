import React, { useState } from "react";
import { Styled } from "../constants/formStyled";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DepositStyled } from "./DepositForm";

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
        label: "Treasure box - 17%",
        depositType: "Treasure box",
        interestRate: 17,
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

const DepositCalculatorForm = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [calculatedResult, setCalculatedResult] = useState(0);
  const {
    register,
    formState: { isValid },
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const calculateResult = (data) => {
    const selectedDepositType = watch("depositType");
    const selectedTermString = watch("depositTerm");
    const selectedTerm = parseInt(selectedTermString, 10);

    if (selectedDepositType && !isNaN(selectedTerm)) {
      const selectedOption = depositInputsData
        .find((input) => input.inputName === "depositType")
        .options.find((option) => option.label === selectedDepositType);

      if (selectedOption) {
        const interestRate = selectedOption.interestRate;

        const sum = parseFloat(data.sum);
        const result = sum + (sum * interestRate * selectedTerm) / 100;
        setCalculatedResult(result);
      }
    }
  };
  const resetForm = () => {
    reset();
    setSelectedCard(null);
    setCalculatedResult(0);
  };

  return (
    <Styled.Wrapper>
      <p>Deposit Calculator</p>
      {depositInputsData.map((input) => (
        <Styled.Field key={input.id}>
          {input.inputType === "select" ? (
            <DepositStyled.Block>
              <Styled.Label>{input.labelName}</Styled.Label>
              <DepositStyled.Select
                {...register(input.inputName, { required: true })}
                onChange={(e) =>
                  calculateResult({
                    depositType: e.target.value,
                    sum: watch("sum"),
                  })
                }
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
                onChange={(e) =>
                  calculateResult({
                    depositType: watch("depositType"),
                    sum: e.target.value,
                  })
                }
              />
            </>
          )}
        </Styled.Field>
      ))}

      {calculatedResult > 0 && (
        <Styled.Field>
          <Styled.Label>Calculated Result</Styled.Label>
          <Styled.Input
            type="text"
            value={calculatedResult.toFixed(2)}
            disabled
          />
        </Styled.Field>
      )}
      <Styled.ButtonLine>
        <Styled.Button
          onClick={() => {
            resetForm();
          }}
        >
          Cancel
        </Styled.Button>
      </Styled.ButtonLine>
    </Styled.Wrapper>
  );
};

export default DepositCalculatorForm;
