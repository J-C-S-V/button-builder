export const ChangeColor = ({
  onColorChange,
}: {
  onColorChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <h4>Change color</h4>
      <input type="color" onChange={onColorChange} />
    </>
  );
};
