import { ChangeFontWeight } from "./ChangeFontWeight";
import { ChangeBorder } from "./ChangeBorder";
import { ChangeBorderColor } from "./ChangeBorderColor";

export const ControlsTwo = ({
    onFontWeightChange,
    fontWeight,
    onBorderChange,
    border,
    onBorderColorChange,
    borderColor,
}: {
    onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fontWeight: number;
    onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border: number;
    onBorderColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    borderColor: string;
}) => {
    return (
      <div className="workbench__controls">
        <ChangeFontWeight
          fontWeight={fontWeight}
          onFontWeightChange={onFontWeightChange}
        />
        <ChangeBorder
          border={border}
          onBorderChange={onBorderChange}
        />
        <ChangeBorderColor
          borderColor={borderColor}
          onBorderColorChange={onBorderColorChange}
        />
      </div>
    );
};