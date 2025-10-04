import styles from "./Button.module.css";
import { useState } from "react";
import { LeftSection } from "../../LeftSection/LeftSection";

export const Button = ({
  backgroundColor,
  innerText,
  borderRadius,
  paddingY,
  paddingX,
  fontWeight,
  fontSize,
  fontColor,
  borderWidth,
  borderColor,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
  hoverBrightness,
  hoverScale,
  hoverColor,
  hoverBackgroundColor,
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
  borderWidth: number;
  borderColor: string;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
  hoverBrightness: number;
  hoverScale: number;
  hoverColor: string;
  hoverBackgroundColor: string;
  transition: number;
}) => {
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = {
    filter: `brightness(${hoverBrightness})`,
    transform: `scale(${hoverScale})`,
    backgroundColor: hoverBackgroundColor,
    borderRadius: `${borderRadius}px`,
    padding: `${paddingY}px ${paddingX}px`,
    fontWeight: fontWeight,
    fontSize: fontSize,
    color: hoverColor,
    border: `${borderWidth}px solid ${borderColor}`,
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
                border: `${borderWidth}px solid ${borderColor}`,
                boxShadow: `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`,
                transition: `all ${transition}s ease-in-out`,
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
