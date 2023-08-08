import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ukrainePhoneRegex } from "../constants/reduxUsers";
import { Styled } from "../constants/formStyled";

const registerInputsData = [
  {
    id: 0,
    inputType: "text",
    inputName: "fullName",
    labelName: "Full Name",
    placeholder: "Enter your full name",
    validationRules: {
      required: "Full name is required",
    },
  },
  {
    id: 1,
    inputType: "phone",
    inputName: "phone",
    labelName: "Phone",
    placeholder: "Enter your phone number",
    validationRules: {
      required: "This field is required and must be a valid phone number",
      pattern: {
        value: ukrainePhoneRegex,
      },
    },
  },
  {
    id: 2,
    inputType: "password",
    labelName: "Password",
    placeholder: "Enter your password",
    inputName: "password",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 6,
        message:
          "This field is required and must be at least 6 characters long",
      },
    },
  },
];

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(register(data));
      if (register.fulfilled.match(result)) {
        console.log("Registration successful:", result.payload);
      } else {
        console.log("Registration unsuccessful:", result.error);
      }
    } catch (error) {
      console.log("Registration error:", error);
    }
    reset();
  };

  return (
    <Styled.Wrapper>
      <p>Registration</p>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {registerInputsData.map((item) => (
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
        <Styled.Button type="submit" disabled={!isValid}>
          Login
        </Styled.Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default RegistrationForm;
