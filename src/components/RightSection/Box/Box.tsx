import { useState } from "react";
import styles from "./Box.module.css";
import { ChangeBorder } from "./Components/ChangeBorder";
import { ChangePadding } from "./Components/ChangePadding";
import { ChangeBorderRadius } from "./Components/ChangeBorderRadius";
import { ChangeBoxShadow } from "./Components/ChangeBoxShadow";

export const Box = ({
  onChangeBorder,
  onPaddingYChange,
  onPaddingXChange,
  border,
  paddingY,
  paddingX,
  borderRadius,
  onBorderRadiusChange,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
  onBoxShadowYChange,
  onBoxShadowXChange,
  onBoxShadowBlurChange,
  onBoxShadowColorChange,
  onBoxShadowSpreadChange,
}: {
  onChangeBorder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaddingXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border: number;
  paddingY: number;
  paddingX: number;
  borderRadius: number;
  onBorderRadiusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
  onBoxShadowYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowBlurChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowSpreadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className={`${styles["box"]}`}>
      <h2 onClick={() => setShowBox(!showBox)} className={styles["box__title"]}>
        <span className={styles["box__title-text"]}>Box</span>
        {showBox ? <span className={styles["box__title-text"]}>–</span> : <span className={styles["box__title-text"]}>+</span>}
      </h2>
      <div className={`${showBox ? styles["show"] : styles["box__content"]}`}>
        <ChangePadding
          paddingY={paddingY}
          paddingX={paddingX}
          onPaddingYChange={onPaddingYChange}
          onPaddingXChange={onPaddingXChange}
        />
        <ChangeBorder border={border} onBorderChange={onChangeBorder} />
        <ChangeBorderRadius borderRadius={borderRadius} onBorderRadiusChange={onBorderRadiusChange} />
        <ChangeBoxShadow
          boxShadowY={boxShadowY}
          boxShadowX={boxShadowX}
          boxShadowBlur={boxShadowBlur}
          boxShadowColor={boxShadowColor}
          boxShadowSpread={boxShadowSpread}
          onBoxShadowYChange={onBoxShadowYChange}
          onBoxShadowXChange={onBoxShadowXChange}
          onBoxShadowBlurChange={onBoxShadowBlurChange}
          onBoxShadowColorChange={onBoxShadowColorChange}
          onBoxShadowSpreadChange={onBoxShadowSpreadChange}
        />
      </div>
      <hr />
    </div>
  );
};
