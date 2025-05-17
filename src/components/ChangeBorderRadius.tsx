export const ChangeBorderRadius = ({
  onBorderRadiusChange,
  borderRadius,
}: // isBorderActive,
{
  onBorderRadiusChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius: number;
  // isBorderActive: boolean;
}) => {
  return (
    <>
      {/* <input
        type="checkbox"
        id="borderRadius"
        onChange={onBorderRadiusChange}
        // disabled={!isBorderActive}
      /> */}
      <label title="Enter border radius" htmlFor="borderRadius">
        Border Radius:
      </label>
      <input
        className="workbench__input-radius"
        type="number"
        id="borderRadius"
        onChange={onBorderRadiusChange}
        // value={isBorderActive ? 10 : 0}
        placeholder={borderRadius.toString()}
        min={0}
        value={borderRadius}
      />
    </>
  );
};
