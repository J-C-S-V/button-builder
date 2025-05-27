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
      <input
        className="workbench__input-radius"
        type="number"
        id="borderRadius"
        onChange={onBorderRadiusChange}
        placeholder={borderRadius.toString()}
        min={0}
        value={borderRadius}
      />
    </>
  );
};
