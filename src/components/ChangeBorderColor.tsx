export const ChangeBorderColor = ({
    onBorderColorChange,
    borderColor,
}: {
    onBorderColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    borderColor: string;
}) => {
  return (
    <>
        <label htmlFor="borderColor" className="label">Border Color:</label>
        <div className="workbench__input-color">
            <input
                className="workbench__input-border-color"
                type="color"
                id="borderColor"
                value={borderColor}
                onChange={onBorderColorChange}
            />
            <input
                type="text"
                className="workbench__border-color-preview"
                value={borderColor}
                onChange={onBorderColorChange}
            />
        </div>
    </>
);
};