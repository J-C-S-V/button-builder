export const ChangeFontWeight = ({
  fontWeight,
  onFontWeightChange,
}: {
  fontWeight: number;
  onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label htmlFor="fontWeight" className="label">
        Font Weight:
      </label>
      <div className="workbench__input-font-weight-wrapper">
        <input
          className="workbench__input-font-weight"
          type="range"
          id="fontWeight"
          min={100}
          max={900}
          step={100}
          value={fontWeight}
          onChange={onFontWeightChange}
        />
        <span className="workbench__input-font-weight-span">{fontWeight}</span>
      </div>
    </>
  );
};
