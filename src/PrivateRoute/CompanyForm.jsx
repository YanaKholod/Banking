import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Styled } from "../constants/formStyled";

const companyInputsData = [
  {
    id: 0,
    inputType: "text",
    inputName: "companyName",
    labelName: "Company name",
    placeholder: "Enter company name",
    validationRules: {
      required: "Required field!",
    },
  },
  {
    id: 1,
    inputType: "text",
    inputName: "iban",
    labelName: "Iban",
    placeholder: "Enter Iban",
    validationRules: {
      required: "Required field!",
    },
  },
  {
    id: 2,
    inputType: "text",
    labelName: "Edpnou",
    placeholder: "Enter edpnou",
    inputName: "edpnou",
    validationRules: {
      required: "Required field!",
    },
  },
  {
    id: 3,
    inputType: "text",
    labelName: "Country code",
    placeholder: "Enter country code",
    inputName: "countryCode",
    validationRules: {
      required: "Required field!",
    },
  },
];

const CompanyForm = ({ closeCompanyModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async () => {};

  return (
    <Styled.Wrapper>
      <p>Registration</p>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {companyInputsData.map((item) => (
          <Styled.Field key={item.id}>
            <Styled.Label>{item.labelName}</Styled.Label>
            <Styled.Input
              type={item.inputType}
              {...register(item.inputName, item.validationRules)}
              placeholder={item.placeholder}
            />
            <Styled.Errors>
              {errors[item.inputName] && (
                <span>{errors[item.inputName].message}</span>
              )}
            </Styled.Errors>
          </Styled.Field>
        ))}
        <Styled.ButtonLine>
          <Styled.Button type="submit" disabled={!isValid}>
            Submit
          </Styled.Button>
          <Styled.Button
            onClick={() => {
              closeCompanyModal();
            }}
          >
            Cancel
          </Styled.Button>
        </Styled.ButtonLine>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default CompanyForm;
