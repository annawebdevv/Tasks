import { FC } from "react";

export enum CardVariant {
  outline = "outline",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: ()=> void;
}

export const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }} onClick={onClick}>
      {children}
    </div>
  );
};
