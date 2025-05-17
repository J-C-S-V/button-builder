export const Button = ({
  color,
  innerText,
}: {
  color: string;
  innerText: string;
}) => {
  return (
    <>
      <a style={{ backgroundColor: color }}>{innerText}</a>
    </>
  );
};
