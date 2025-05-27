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
      <div className="workbench__input-font-size-wrapper">
        <input
          className="workbench__input-font-size"
          type="range"
          id="fontSize"
          min={0}
          max={100}
          step={1}
          value={fontSize}
          onChange={onFontSizeChange}
        />
        <span className="workbench__input-font-size-span">{fontSize}px</span>
      </div>
    </>
  );
};
