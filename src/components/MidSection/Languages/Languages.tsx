import { useState } from "react";
import { Footer } from "../../Footer";
import styles from "./Languages.module.css";

export const Languages = ({
  borderWidth,
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
  transition,
  hoverBrightness,
  hoverScale,
  hoverColor,
  hoverBackgroundColor,
}: {
  borderWidth: number;
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
  transition: number;
  hoverBrightness: number;
  hoverScale: number;
  hoverColor: string;
  hoverBackgroundColor: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyHTML = () => {
    navigator.clipboard
      .writeText(`<a class="button">${innerText}</a>`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const handleCopyCSS = () => {
    navigator.clipboard
      .writeText(
        `.button {
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius}px;
  padding: ${paddingY}px ${paddingX}px;
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  color: ${fontColor};
  border: ${borderWidth}px solid ${borderColor};
  box-shadow: ${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor};
  transition: all ${transition}s ease-in-out;
}`
      )
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className={styles.languages}>
      {copied && <div className={styles.languages__copied}>Copied!</div>}
      <button onClick={handleCopyCSS} className={`${styles.languages__css} ${styles.languages__button}`}>
        Get CSS
      </button>
      <button onClick={handleCopyHTML} className={`${styles.languages__html} ${styles.languages__button}`}>
        Get HTML
      </button>
      <Footer />
    </div>
  );
};
