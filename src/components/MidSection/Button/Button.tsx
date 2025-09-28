import styles from "./Button.module.css";

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
}) => {
  return (
    <div className={styles["workbench__button"]}>
      <a
        className={styles["workbench__button--anchor"]}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius}px`,
          padding: `${paddingY}px ${paddingX}px`,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: fontColor,
          border: `${border}px solid ${borderColor}`,
          boxShadow: `${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
