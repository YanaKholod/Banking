import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ukrainePhoneRegex } from "../constants/reduxUsers";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>FullName</label>
        <input {...register("fullName", { required: true })} />
        {errors.fullName && <span>This field is required</span>}
      </div>
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
            This field is required and must be at least 6 characters long{" "}
          </span>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
