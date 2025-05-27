export const ChangeColor = ({
  onColorChange,
  backgroundColor,
}: {
  onColorChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor: string;
}) => {
  return (
    <>
      <label htmlFor="background" className="label">
        Background Color:
      </label>
      <div className="workbench__input-color">
        <input type="color" id="background" onChange={onColorChange} />
        <input type="text" className="workbench__background-color-preview" value={backgroundColor} onChange={onColorChange} />
      </div>
    </>
  );
};
