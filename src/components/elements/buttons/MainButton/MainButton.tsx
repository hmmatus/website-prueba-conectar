import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}
const MainButton = (props: Props) => {
  return (
    <button {...props} className={`w-100 rounded-lg bg-primary p-4  text-white ${props.className}`}>
      {props.title}
    </button>
  );
};

export default MainButton;
