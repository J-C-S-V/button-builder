import styles from "./Button.module.css";
import { useState } from "react";

export const Button = ({
  backgroundColor,
  innerText,
  borderRadius,
  paddingY,
  paddingX,
  fontWeight,
  fontSize,
  fontColor,
  border,
  borderColor,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
  isHoverBrightness,
  isHoverScale,
  isHoverColor,
  isHoverBackgroundColor,
  transition,
}: {
  backgroundColor: string;
  innerText: string;
  borderRadius: number;
  paddingY: number;
  paddingX: number;
  fontWeight: number;
  fontSize: number;
  fontColor: string;
  border: number;
  borderColor: string;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
  isHoverBrightness: number;
  isHoverScale: number;
  isHoverColor: string;
  isHoverBackgroundColor: string;
  transition: number;
}) => {
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = {
    filter: `brightness(${isHoverBrightness})`,
    transform: `scale(${isHoverScale})`,
    backgroundColor: isHoverBackgroundColor,
    borderRadius: `${borderRadius}px`,
    padding: `${paddingY}px ${paddingX}px`,
    fontWeight: fontWeight,
    fontSize: fontSize,
    color: isHoverColor,
    border: `${border}px solid ${borderColor}`,
    boxShadow: `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`,
    transition: `all ${transition}s ease-in-out`,
  };

  return (
    <div className={styles["workbench__button"]}>
      <a
        className={styles["workbench__button--anchor"]}
        style={
          isHover
            ? hoverStyle
            : {
                backgroundColor: backgroundColor,
                borderRadius: `${borderRadius}px`,
                padding: `${paddingY}px ${paddingX}px`,
                fontWeight: fontWeight,
                fontSize: fontSize,
                color: fontColor,
                border: `${border}px solid ${borderColor}`,
                boxShadow: `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`,
                transition: "all 0.3s ease-in-out",
              }
        }
        onMouseLeave={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        {innerText}
      </a>
    </div>
  );
};
