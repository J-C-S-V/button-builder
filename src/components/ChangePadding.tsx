export const ChangePadding = ({
  onPaddingYChange,
  onPaddingXChange,
  paddingY,
  paddingX,
}: {
  onPaddingYChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingXChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  paddingY: number;
  paddingX: number;
}) => {
  return (
    <>
      <label title="Enter padding" htmlFor="padding" className="label">
        Padding:
      </label>
      <div className="workbench__padding-wrapper">
        <div className="workbench__text-padding-y">
          <input
            type="range"
            className="workbench__input-padding-y"
            id="padding"
            placeholder={paddingY.toString()}
            min={0}
            max={50}
            step={1}
            value={paddingY}
            onChange={onPaddingYChange}
          />{" "}
          <span className="workbench__padding-y">Y&nbsp;&nbsp;{paddingY}px</span>
        </div>
        <div className="workbench__text-padding-x">
          <input
            type="range"
            className="workbench__input-padding-x"
            id="padding"
            placeholder={paddingX.toString()}
            min={0}
            max={100}
            step={1}
            value={paddingX}
            onChange={onPaddingXChange}
          />
          <span className="workbench__padding-x">X&nbsp;&nbsp;{paddingX}px</span>
        </div>
      </div>
    </>
  );
};
