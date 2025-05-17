export const ChangeColor = ({
  onColorChange,
}: {
  onColorChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label htmlFor="background">Background Color:</label>
      <input type="color" id="background" onChange={onColorChange} />
    </>
  );
};
