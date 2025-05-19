export const Button = ({
  color,
  innerText,
  borderRadius,
  padding,
  fontWeight,
  fontSize,
  fontColor,
  // shadow,
}: {
  color: string;
  innerText: string;
  borderRadius?: number;
  padding?: number;
  fontWeight?: number;
  fontSize?: number;
  fontColor?: string;
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
          color: fontColor,
          // boxShadow: shadow,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
