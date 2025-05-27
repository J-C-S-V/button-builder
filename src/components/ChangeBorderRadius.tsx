export const ChangeBorderRadius = ({
  onBorderRadiusChange,
  borderRadius,
}: {
  onBorderRadiusChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius: number;
}) => {
  return (
    <>
      <label title="Enter border radius" htmlFor="borderRadius" className="label">
        Border Radius:
      </label>
      <div className="workbench__input-radius-wrapper">
        <input
          className="workbench__input-radius"
          type="range"
          id="borderRadius"
          onChange={onBorderRadiusChange}
          placeholder={borderRadius.toString()}
          min={0}
          max={50}
          step={1}
          value={borderRadius}
        />
        <span className="workbench__input-radius-span">{borderRadius}%</span>
      </div>
    </>
  );
};
