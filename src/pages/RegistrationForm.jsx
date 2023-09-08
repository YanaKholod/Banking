import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ukrainePhoneRegex } from "../constants/reduxUsers";
import { Styled } from "../constants/formStyled";
import { registerUser } from "../redux/auth/actions";
import { toast } from "react-toastify";

const registerInputsData = [
  {
    id: 0,
    inputType: "text",
    inputName: "fullName",
    labelName: "Full Name",
    placeholder: "Enter your full name",
    validationRules: {
      required: "Required field!",
    },
  },
  {
    id: 1,
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
    id: 2,
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

const RegistrationForm = ({ closeRegisterModal }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
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
    await dispatch(registerUser({ ...data, phone: formattedPhoneNumber }));
    if (error) {
      toast.error(error);
    } else {
      toast.success("Registration success");
    }
    reset();
    closeRegisterModal();
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
            Register
          </Styled.Button>
          <Styled.Button
            onClick={() => {
              closeRegisterModal();
            }}
          >
            Cancel
          </Styled.Button>
        </Styled.ButtonLine>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default RegistrationForm;
