import { ChangeFontWeight } from "./ChangeFontWeight";
import { ChangeBorder } from "./ChangeBorder";
import { ChangeBorderColor } from "./ChangeBorderColor";
import { ChangeBoxShadow } from "./ChangeBoxShadow";

export const ControlsTwoCopy = ({
  onFontWeightChange,
  fontWeight,
  onBorderChange,
  border,
  onBorderColorChange,
  borderColor,
  onBoxShadowYChange,
  boxShadowY,
  onBoxShadowXChange,
  boxShadowX,
  onBoxShadowBlurChange,
  boxShadowBlur,
  onBoxShadowColorChange,
  boxShadowColor,
  onBoxShadowSpreadChange,
  boxShadowSpread,
}: {
  onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontWeight: number;
  onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border: number;
  onBorderColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor: string;
  onBoxShadowYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowY: number;
  onBoxShadowXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowX: number;
  onBoxShadowBlurChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowBlur: number;
  onBoxShadowColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowColor: string;
  onBoxShadowSpreadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowSpread: number;
}) => {
  return (
    <div className="workbench__controls">
      <ChangeFontWeight fontWeight={fontWeight} onFontWeightChange={onFontWeightChange} />
      <ChangeBorder border={border} onBorderChange={onBorderChange} />
      <ChangeBorderColor borderColor={borderColor} onBorderColorChange={onBorderColorChange} />
      <ChangeBoxShadow
        boxShadowY={boxShadowY}
        onBoxShadowYChange={onBoxShadowYChange}
        boxShadowX={boxShadowX}
        onBoxShadowXChange={onBoxShadowXChange}
        boxShadowBlur={boxShadowBlur}
        onBoxShadowBlurChange={onBoxShadowBlurChange}
        boxShadowColor={boxShadowColor}
        onBoxShadowColorChange={onBoxShadowColorChange}
        boxShadowSpread={boxShadowSpread}
        onBoxShadowSpreadChange={onBoxShadowSpreadChange}
      />
    </div>
  );
};
