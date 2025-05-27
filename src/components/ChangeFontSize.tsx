export const ChangeFontSize = ({
  fontSize,
  onFontSizeChange,
}: {
  fontSize: number;
  onFontSizeChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label htmlFor="fontSize" className="label">
        Font Size:
      </label>
      <input
        className="workbench__input-font-size"
        type="number"
        id="fontSize"
        min={6}
        max={100}
        step={1}
        value={fontSize}
        onChange={onFontSizeChange}
      />
    </>
  );
};
