export const ChangeColor = ({
  onColorChange,
  color,
}: {
  onColorChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  color: string;
}) => {
  return (
    <>
      <label htmlFor="background">Background Color:</label>
      <div className="workbench__input-color">
        <input type="color" id="background" onChange={onColorChange} />
        <input type="text" className="workbench__background-color-preview" value={color} onChange={onColorChange} />
      </div>
    </>
  );
};
