import { IconCopy } from "./Icons";
import { useRef, useState } from "react";

export const CodeAreaCSS = ({
  backgroundColor,
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (textareaRef.current) {
      navigator.clipboard
        .writeText(textareaRef.current.value)
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
    <>
      <h2>CSS code</h2>
      <div className="workbench__code-area-wrapper" style={{ position: "relative" }}>
        <textarea
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
        <button onClick={handleCopy} className="workbench__copy-button">
          <IconCopy />
        </button>

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
    </>
  );
};
