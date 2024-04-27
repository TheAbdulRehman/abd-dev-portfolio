import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export const HeaderHeading: React.FC<TextProps> = ({
  children,
  className = "",
}) => <h1 className={`text-5xl/[130%] font-bold  ${className}`}>{children}</h1>;

export const TextXl: React.FC<TextProps> = ({ children, className = "" }) => (
  <h3 className={`text-xl font-medium  ${className}`}>{children}</h3>
);
