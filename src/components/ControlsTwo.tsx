import { ChangeFontWeight } from "./ChangeFontWeight";
import { ChangeBorder } from "./ChangeBorder";

export const ControlsTwo = ({
    onFontWeightChange,
    fontWeight,
    onBorderChange,
    border,

}: {
    onFontWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fontWeight: number;
    onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border: number;
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
      </div>
    );
};