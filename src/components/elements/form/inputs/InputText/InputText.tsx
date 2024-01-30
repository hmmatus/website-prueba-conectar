import React, { ChangeEventHandler, useState } from "react";
import InputWrapper from "../InputWrapper/InputWrapper";

type Props = {
  title: string;
  errorMessage?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number;
  onChange(value: string): void;
  name: string;
};
const InputText = ({
  title,
  errorMessage,
  type = "text",
  value,
  onChange,
  name,
}: Props) => {
  const onChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  return (
    <InputWrapper title={title} errorMessage={errorMessage || ""}>
      <input
        name={name}
        className={`w-100 border focus:border-blue rounded-md border-${errorMessage ? "error" : "slate-950"}`}
        type={type}
        value={value}
        onChange={onChangeValue}
      />
    </InputWrapper>
  );
};

export default InputText;
