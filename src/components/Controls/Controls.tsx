import { ChangeColor } from "../ChangeColor";
import { ChangeBorderRadius } from "../ChangeBorderRadius";
import { ChangeFontColor } from "../ChangeFontColor";
import { ChangeInnerText } from "../ChangeInnerText";
import { ChangePadding } from "../ChangePadding";
import { ChangeFontSize } from "../ChangeFontSize";
import styles from "./Controls.module.css";
import { useState } from "react";

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
  const [showControls, setShowControls] = useState(true);

  return (
    <div className={styles["controls__font"]}>
      <h2 onClick={() => setShowControls(!showControls)} className={styles["controls__title"]}>
        Controls
      </h2>
      <div className={styles["controls__content"]}>
        {showControls && (
          <>
            <ChangeFontSize fontSize={fontSize} onFontSizeChange={onFontSizeChange} />
            <ChangeFontColor fontColor={fontColor} onFontColorChange={onFontColorChange} />
          </>
        )}
        {/* <ChangeInnerText onTextChange={onTextChange} innerText={innerText} />
      <ChangeColor backgroundColor={backgroundColor} onColorChange={onBackgroundColorChange} />
      <ChangeBorderRadius onBorderRadiusChange={onBorderRadiusChange} borderRadius={borderRadius} /> */}

        {/* <ChangePadding
        paddingY={paddingY}
        paddingX={paddingX}
        onPaddingYChange={onPaddingYChange}
        onPaddingXChange={onPaddingXChange}
      /> */}
      </div>
    </div>
  );
};
