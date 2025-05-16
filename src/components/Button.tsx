export const Button = ({
  color,
  fontWeight,
  width = 100,
}: {
  color: string;
  fontWeight: string;
  width?: number;
}) => {
  return (
    <>
      <button
        style={{ backgroundColor: color, fontWeight: fontWeight, width: width }}
      >
        Button
      </button>
    </>
  );
};
