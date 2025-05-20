import { Button } from "./Button";
import { CodeAreaCSS } from "./CodeAreaCSS";
import { CodeAreaHTML } from "./CodeAreaHTML";

export const CodeArea = ({
    backgroundColor,
    borderRadius,
    paddingY,
    paddingX,
    fontWeight,
    fontSize,
    fontColor,
    innerText,
}: {
    backgroundColor: string;
    borderRadius: number;
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
        backgroundColor={backgroundColor}
        innerText={innerText}
        borderRadius={borderRadius}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
      ></Button>
      <CodeAreaCSS
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
      />
      <CodeAreaHTML innerText={innerText} />
    </aside>
    )
}