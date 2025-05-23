export const ChangeInnerText = ({
  onTextChange,
  innerText,
}: {
  onTextChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
}) => {
  return (
    <>
      <label htmlFor="innerText">Button Text:</label>
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
