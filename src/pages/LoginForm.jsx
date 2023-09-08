import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/actions";
import { ukrainePhoneRegex } from "../constants/reduxUsers";
import { Styled } from "../constants/formStyled";
import { toast } from "react-toastify";

const loginInputsData = [
  {
    id: 0,
    inputType: "phone",
    inputName: "phone",
    labelName: "Phone",
    placeholder: "Enter your phone number",
    validationRules: {
      required: "Required field!",
      pattern: {
        value: ukrainePhoneRegex,
      },
    },
  },
  {
    id: 1,
    inputType: "password",
    labelName: "Password",
    placeholder: "Enter your password",
    inputName: "password",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 6,
        message: "Must be at least 6 characters long",
      },
    },
  },
];
const LoginForm = ({ closeLoginModal }) => {
  const dispatch = useDispatch();
  const reduxError = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const formattedPhoneNumber = `+38${data.phone}`;

    await dispatch(login({ ...data, phone: formattedPhoneNumber }));
    if (reduxError) {
      toast.error(reduxError);
    }
    reset();
    closeLoginModal();
  };

  return (
    <Styled.Wrapper>
      <p>Login</p>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {loginInputsData.map((item) => (
          <Styled.Field key={item.id}>
            <Styled.Label>{item.labelName}</Styled.Label>
            <Styled.Input
              type={item.inputType}
              {...register(item.inputName, item.validationRules)}
              placeholder={item.placeholder}
              {...(item.inputType === "phone" && { maxLength: 10 })}
              {...(item.inputType === "phone" && {
                onInput: (e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                },
              })}
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
            Login
          </Styled.Button>
          <Styled.Button
            onClick={() => {
              closeLoginModal();
            }}
          >
            Cancel
          </Styled.Button>
        </Styled.ButtonLine>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default LoginForm;
