export const Button = ({
  color,
  innerText,
  borderRadius,
  padding,
  fontWeight,
  fontSize,
  // shadow,
}: {
  color: string;
  innerText: string;
  borderRadius?: number;
  padding?: number;
  fontWeight?: number;
  fontSize?: number;
  // shadow?: string;
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
          fontSize: fontSize,
          // boxShadow: shadow,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
