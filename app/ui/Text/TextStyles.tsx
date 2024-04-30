import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export const HeaderHeading: React.FC<TextProps> = ({
  children,
  className = "",
}) => <h1 className={`text-5xl/[130%] font-bold  ${className}`}>{children}</h1>;

export const Text2xl: React.FC<TextProps> = ({ children, className = "" }) => (
  <h4 className={`text-2xl/[130%] font-bold  ${className}`}>{children}</h4>
);
export const HeadingH3: React.FC<TextProps> = ({
  children,
  className = "",
}) => (
  <h3 className={`text-[28px]/[130%] font-semibold  ${className}`}>
    {children}
  </h3>
);

export const HeadingH2: React.FC<TextProps> = ({
  children,
  className = "",
}) => (
  <h2
    className={`text-2xl before:md:text-3xl lg:text-4xl/[130%] font-semibold  ${className}`}
  >
    {children}
  </h2>
);

export const HeadingH5: React.FC<TextProps> = ({
  children,
  className = "",
}) => <h5 className={`text-xl font-bold  ${className}`}>{children}</h5>;
export const BodyText: React.FC<TextProps> = ({ children, className = "" }) => (
  <p className={`text-lg font-medium  ${className}`}>{children}</p>
);
export const TextBase: React.FC<TextProps> = ({ children, className = "" }) => (
  <p className={`text-base font-normal  ${className}`}>{children}</p>
);
export const TextSm: React.FC<TextProps> = ({ children, className = "" }) => (
  <p className={`text-sm font-normal  ${className}`}>{children}</p>
);
