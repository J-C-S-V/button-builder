import { IconCopy } from "./Icons";
import { useRef, useState } from "react";

export const CodeAreaHTML = ({ innerText }: { innerText: string }) => {
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
      <h2>HTML code</h2>
      <div className="workbench__code-area-wrapper">
        <textarea
          ref={textareaRef}
          rows={5}
          cols={50}
          disabled
          value={`<a class="button">${innerText}</a>`}
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
            }}
          >
            Copied!
          </div>
        )}
      </div>
    </>
  );
};
