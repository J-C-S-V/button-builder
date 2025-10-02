import { CodeAreaCSS } from "../../CodeAreaCSS";
import styles from "./Languages.module.css";

export const Languages = ({
  border,
  borderColor,
  borderRadius,
  backgroundColor,
  paddingY,
  paddingX,
  fontWeight,
  fontSize,
  fontColor,
  innerText,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
}: {
  border: number;
  borderColor: string;
  borderRadius: number;
  backgroundColor: string;
  paddingY: number;
  paddingX: number;
  fontWeight: number;
  fontSize: number;
  fontColor: string;
  innerText: string;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
}) => {
  return (
    <div className={styles.languages}>
      <CodeAreaCSS
        border={border}
        borderColor={borderColor}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        innerText={innerText}
        boxShadowY={boxShadowY}
        boxShadowX={boxShadowX}
        boxShadowBlur={boxShadowBlur}
        boxShadowColor={boxShadowColor}
        boxShadowSpread={boxShadowSpread}
      />
      <button className={`${styles.languages__css} ${styles.languages__button}`}>Get CSS</button>
      <button className={`${styles.languages__html} ${styles.languages__button}`}>Get HTML</button>
    </div>
  );
};
