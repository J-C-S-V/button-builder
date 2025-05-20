import { ChangeColor } from "./ChangeColor";
import { ChangeBorderRadius } from "./ChangeBorderRadius";
import { ChangeFontColor } from "./ChangeFontColor";
import { ChangeFontWeight } from "./ChangeFontWeight";
import { ChangeInnerText } from "./ChangeInnerText";
import { ChangePadding } from "./ChangePadding";
import { ChangeFontSize } from "./ChangeFontSize";

export const Controls = ({
    onTextChange,
    innerText,
    onBackgroundColorChange,
    backgroundColor,
    onFontColorChange,
    fontColor,
    onBorderRadiusChange,
    borderRadius,
    onPaddingYChange,
    paddingY,
    onPaddingXChange,
    paddingX,
    onFontWeightChange,
    fontWeight,
    onFontSizeChange,
    fontSize,

}: {
    onTextChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    innerText: string;
    onBackgroundColorChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    backgroundColor: string;
    onFontColorChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    fontColor: string;
    onBorderRadiusChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    borderRadius: number;
    onPaddingYChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    paddingY: number;
    onPaddingXChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    paddingX: number;
    onFontWeightChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    fontWeight: number;
    onFontSizeChange: ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
    fontSize: number;
}) => {

    return (
<div className="workbench__controls">
        <ChangeInnerText onTextChange={onTextChange} innerText={innerText} />
        <ChangeFontColor
          fontColor={fontColor}
          onFontColorChange={onFontColorChange}
        />
        <ChangeColor
          backgroundColor={backgroundColor}
          onColorChange={onBackgroundColorChange}
        />
        <ChangeBorderRadius
          onBorderRadiusChange={onBorderRadiusChange}
          borderRadius={borderRadius}
        />
        <ChangePadding
          paddingY={paddingY}
          paddingX={paddingX}
          onPaddingYChange={onPaddingYChange}
          onPaddingXChange={onPaddingXChange}
        />
        <ChangeFontWeight
          fontWeight={fontWeight}
          onFontWeightChange={onFontWeightChange}
        />
        <ChangeFontSize
          fontSize={fontSize}
          onFontSizeChange={onFontSizeChange}
        />
      </div>
    );
};