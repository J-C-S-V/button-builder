import { Button } from "./Button";
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
      />
      <CodeAreaHTML innerText={innerText} />
    </aside>
    )
}