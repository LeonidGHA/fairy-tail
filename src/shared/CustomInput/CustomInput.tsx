import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  classNameLabel?: string;
  classNameInput?: string;
  classNameError?: string;
  errorMessage?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const CustomInput: React.FC<IInputProps> = ({
  register,
  classNameLabel,
  classNameInput,
  classNameError,
  errorMessage,
  placeholder,
}) => {
  return (
    <label className={classNameLabel}>
      <input
        {...register}
        placeholder={placeholder}
        className={classNameInput}
      />
      {errorMessage ? (
        <span className={classNameError}>{errorMessage}</span>
      ) : null}
    </label>
  );
};

export default CustomInput;
