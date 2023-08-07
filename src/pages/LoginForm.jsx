import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/actions";
import { ukrainePhoneRegex } from "../constants/reduxUsers";

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(logIn(data));

      if (register.fulfilled.match(result)) {
        console.log("Login successful:", result.payload);
      } else {
        console.log("Login unsuccessful:", result.error);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Phone</label>
        <input
          {...register("phone", { required: true, pattern: ukrainePhoneRegex })}
        />
        {errors.phone && (
          <span>This field is required and must be a valid phone number</span>
        )}
      </div>
      <div>
        <label>Password</label>
        <input {...register("password", { required: true, minLength: 6 })} />
        {errors.fullName && (
          <span>
            This field is required and must be at least 6 characters long
          </span>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default LoginForm;
