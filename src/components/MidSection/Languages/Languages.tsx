import { useRef, useState } from "react";
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
  const textareaRefHTML = useRef<HTMLTextAreaElement>(null);
  const textareaRefCSS = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyHTML = () => {
    if (textareaRefHTML.current) {
      navigator.clipboard
        .writeText(textareaRefHTML.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  };

  const handleCopyCSS = () => {
    if (textareaRefCSS.current) {
      navigator.clipboard
        .writeText(textareaRefCSS.current.value)
        .then(() => {
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
      <textarea className={styles.languages__textarea} ref={textareaRefHTML} value={`<a class="button">${innerText}</a>`} />
      <textarea
        className={styles.languages__textarea}
        ref={textareaRefCSS}
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
      {copied && <div className={styles.languages__copied}>Copied!</div>}
      <button onClick={handleCopyCSS} className={`${styles.languages__css} ${styles.languages__button}`}>
        Get CSS
      </button>
      <button onClick={handleCopyHTML} className={`${styles.languages__html} ${styles.languages__button}`}>
        Get HTML
      </button>
    </div>
  );
};
