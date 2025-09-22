import { Button } from "./Button/Button";
import { CodeAreaCSS } from "./CodeAreaCSS";
import { CodeAreaHTML } from "./CodeAreaHTML";

export const CodeArea = ({
  border,
  borderColor,
  borderRadius,
  backgroundColor,
  paddingY,
  paddingX,
  fontWeight,
  fontSize,
  fontColor,
  innerText,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
}: {
  border: number;
  borderColor: string;
  borderRadius: number;
  backgroundColor: string;
  paddingY: number;
  paddingX: number;
  fontWeight: number;
  fontSize: number;
  fontColor: string;
  innerText: string;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
}) => {
  return (
    <aside className="workbench__preview">
      <Button
        border={border}
        borderColor={borderColor}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        innerText={innerText}
        boxShadowY={boxShadowY}
        boxShadowX={boxShadowX}
        boxShadowBlur={boxShadowBlur}
        boxShadowColor={boxShadowColor}
        boxShadowSpread={boxShadowSpread}
      />
      <CodeAreaCSS
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        border={border}
        borderColor={borderColor}
        boxShadowY={boxShadowY}
        boxShadowX={boxShadowX}
        boxShadowBlur={boxShadowBlur}
        boxShadowColor={boxShadowColor}
        boxShadowSpread={boxShadowSpread}
      />
      <CodeAreaHTML innerText={innerText} />
    </aside>
  );
};
