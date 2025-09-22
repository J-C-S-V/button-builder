export const ChangeInnerText = ({
  onTextChange,
  innerText,
}: {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
}) => {
  return (
    <div style={{ backgroundColor: "var(--color-background-dark-light)" }}>
      <label htmlFor="innerText" className="label">
        Button Text:
      </label>
      <input
        type="text"
        className="workbench__textarea"
        id="innerText"
        onChange={onTextChange}
        placeholder="Change text..."
        value={innerText}
      />
    </div>
  );
};
