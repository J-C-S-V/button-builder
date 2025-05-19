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
        <span className="workbench__background-color-preview" >{color}</span>
      </div>
    </>
  );
};
