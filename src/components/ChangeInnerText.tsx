export const ChangeInnerText = ({
  onTextChange,
  innerText,
}: {
  onTextChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => void;
  innerText: string;
}) => {
  return (
    <>
      <label htmlFor="innerText">Button Text:</label>
      <textarea
        className="workbench__textarea"
        id="innerText"
        onChange={onTextChange}
        placeholder="Change text..."
      >
        {innerText}
      </textarea>
    </>
  );
};
