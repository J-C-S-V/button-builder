export const Button = ({
  color,
  innerText,
  borderRadius,
  padding,
}: {
  color: string;
  innerText: string;
  borderRadius?: number;
  padding?: number;
}) => {
  return (
    <div className="workbench__button-wrapper">
      <a
        className="workbench__button"
        style={{
          backgroundColor: color,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}px`,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
