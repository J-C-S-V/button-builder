import { ChangeColor } from "./ChangeColor";
import { ChangeBorderRadius } from "./ChangeBorderRadius";
import { ChangeFontColor } from "./ChangeFontColor";
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
  onFontSizeChange,
  fontSize,
}: {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
  onBackgroundColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor: string;
  onFontColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontColor: string;
  onBorderRadiusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius: number;
  onPaddingYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paddingY: number;
  onPaddingXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paddingX: number;
  onFontSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize: number;
}) => {
  return (
    <div className="workbench__controls">
      <ChangeInnerText onTextChange={onTextChange} innerText={innerText} />
      <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
      <ChangeColor backgroundColor={backgroundColor} onColorChange={onBackgroundColorChange} />
      <ChangeBorderRadius onBorderRadiusChange={onBorderRadiusChange} borderRadius={borderRadius} />
      <ChangePadding
        paddingY={paddingY}
        paddingX={paddingX}
        onPaddingYChange={onPaddingYChange}
        onPaddingXChange={onPaddingXChange}
      />
      <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
    </div>
  );
};
