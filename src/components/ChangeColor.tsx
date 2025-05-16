export const ChangeColor = ({
  onColorChange,
  valueColor,
}: {
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueColor: string;
}) => {
  return (
    <>
      <h4>Change color</h4>
      <input type="color" value={valueColor} onChange={onColorChange} />
    </>
  );
};
