export const ChangeInnerText = ({
  onTextChange,
  innerText,
}: {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
}) => {
  return (
    <>
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
    </>
  );
};
