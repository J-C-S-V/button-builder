import { useState } from "react";
import styles from "./Box.module.css";
import { Border } from "./Components/Border";
import { Padding } from "./Components/Padding";
import { BorderRadius } from "./Components/BorderRadius";
import { BoxShadow } from "./Components/BoxShadow";

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
        <Padding
          paddingY={paddingY}
          paddingX={paddingX}
          onPaddingYChange={onPaddingYChange}
          onPaddingXChange={onPaddingXChange}
        />
        <Border border={border} onBorderChange={onChangeBorder} />
        <BorderRadius borderRadius={borderRadius} onBorderRadiusChange={onBorderRadiusChange} />
        <BoxShadow
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
