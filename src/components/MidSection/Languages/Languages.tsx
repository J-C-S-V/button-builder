import { useRef, useState } from "react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCSS = () => {
    if (textareaRef.current) {
      navigator.clipboard
        .writeText(textareaRef.current.value)
        .then(() => {
          console.log("Copied!");
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  };
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

      <textarea
        style={{ display: "none" }}
        ref={textareaRef}
        rows={10}
        cols={50}
        disabled
        value={`.button {
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius}px;
  padding: ${paddingY}px ${paddingX}px;
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  color: ${fontColor};
  border: ${border}px solid ${borderColor};
  box-shadow: ${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor};
}`}
      />
      <button onClick={handleCopyCSS} className={`${styles.languages__css} ${styles.languages__button}`}>
        Get CSS
      </button>
      <button className={`${styles.languages__html} ${styles.languages__button}`}>Get HTML</button>
      {copied && (
        <div
          style={{
            position: "absolute",
            top: "-1.5rem",
            right: "0",
            backgroundColor: "#333",
            color: "#fff",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            fontSize: "0.8rem",
            pointerEvents: "none",
          }}
        >
          Copied!
        </div>
      )}
    </div>
  );
};
