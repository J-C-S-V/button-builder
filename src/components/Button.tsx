export const Button = ({
  color,
  innerText,
  borderRadius,
  padding,
  fontWeight,
}: {
  color: string;
  innerText: string;
  borderRadius?: number;
  padding?: number;
  fontWeight?: number;
}) => {
  return (
    <div className="workbench__button-wrapper">
      <a
        className="workbench__button"
        style={{
          backgroundColor: color,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}px`,
          fontWeight: fontWeight,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
