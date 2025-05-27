export const ChangeBorder = ({
  onBorderChange,
  border,
}: {
  onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border: number;
}) => {
  return (
    <>
      <label className="label" title="Enter border" htmlFor="border">
        Border width:
      </label>
      <div className="workbench__input-border-wrapper">
        <input
          className="workbench__input-border"
          type="range"
          id="border"
          onChange={onBorderChange}
          value={border}
          min={0}
          max={50}
        />
        <span className="workbench__input-border-span">{border}px</span>
      </div>
    </>
  );
};
