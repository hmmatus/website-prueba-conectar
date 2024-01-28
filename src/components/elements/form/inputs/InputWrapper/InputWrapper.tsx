import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  errorMessage: string;
};
const InputWrapper = ({ title, children, errorMessage="" }: Props) => {
  return (
    <div className="flex flex-col w-100">
      <label>{title}</label>
      {children}
      {errorMessage && <p className="color-error">{errorMessage}</p>}
    </div>
  );
};

export default InputWrapper;
