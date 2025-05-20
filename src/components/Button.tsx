export const Button = ({
  backgroundColor,
  innerText,
  borderRadius,
  paddingY,
  paddingX,
  fontWeight,
  fontSize,
  fontColor,
}: {
  backgroundColor: string;
  innerText: string;
  borderRadius?: number;
  paddingY?: number;
  paddingX?: number;
  fontWeight?: number;
  fontSize?: number;
  fontColor?: string;
}) => {
  return (
    <div className="workbench__button-wrapper">
      <a
        className="workbench__button"
        style={{
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius}px`,
          padding: `${paddingY}px ${paddingX}px`,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: fontColor,
        }}
      >
        {innerText}
      </a>
    </div>
  );
};
