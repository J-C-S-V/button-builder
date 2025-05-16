export const ChangeColor = ({
  onColorChange,
  valueColor,
  onFontChange,
  valueFront,
  onWidthChange,
  width,
}: {
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueColor: string;
  onFontChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  valueFront: string;
  onWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: number;
}) => {
  return (
    <>
      <h1>Change color</h1>
      <input type="color" value={valueColor} onChange={onColorChange} />
      <h2>Change font weight</h2>
      <select value={valueFront} onChange={onFontChange}>
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="bolder">Bolder</option>
        <option value="italic">italic</option>
      </select>
      <h2>Change width</h2>
      <input
        type="range"
        min={100}
        max={500}
        value={width}
        onChange={onWidthChange}
      />
    </>
  );
};
