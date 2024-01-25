import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
