import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type: "submit";
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
