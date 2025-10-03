import { useState } from "react";
import { Font } from "../RightSection/Font/Font";
import { Button } from "../MidSection/Button/Button";
import { Languages } from "../MidSection/Languages/Languages";
import { LeftSection } from "../LeftSection/LeftSection";
import { Box } from "../RightSection/Box/Box";
import { Color } from "../RightSection/Color/Color";
import { State } from "../RightSection/State/State";
import styles from "./WorkBench.module.css";

export const WorkBench = () => {
  const [innerText, setInnerText] = useState("Click me!");
  const [backgroundColor, setbackgroundColor] = useState("#ff0000");
  const [borderRadius, setBorderRadius] = useState(12);
  const [paddingY, setPaddingY] = useState(12);
  const [paddingX, setPaddingX] = useState(40);
  const [fontWeight, setFontWeight] = useState(600);
  const [fontSize, setFontSize] = useState(28);
  const [fontColor, setFontColor] = useState("#ffffff");
  const [border, setBorder] = useState(2);
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [boxShadowX, setBoxShadowX] = useState(-7);
  const [boxShadowY, setBoxShadowY] = useState(7);
  const [boxShadowBlur, setBoxShadowBlur] = useState(0);
  const [boxShadowSpread, setBoxShadowSpread] = useState(0);
  const [boxShadowColor, setBoxShadowColor] = useState("#c2c2c2");
  const [isHoverBrightness, setIsHoverBrightness] = useState(1);
  const [isHoverScale, setIsHoverScale] = useState(1.1);
  const [isHoverColor, setIsHoverColor] = useState("#ffffff");
  const [isHoverBackgroundColor, setIsHoverBackgroundColor] = useState("#ffffff");
  const [transition, setTransition] = useState(0.3);

  const handleTransition = (e) => {
    setTransition(e.target.value);
  };

  const handleInnerText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerText(e.target.value);
  };

  const handleChangebackgroundColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbackgroundColor(e.target.value);
  };

  const handlePaddingYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaddingY(Number(e.target.value));
  };

  const handlePaddingXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaddingX(Number(e.target.value));
  };

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontWeight(Number(e.target.value));
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(e.target.value));
  };

  const handleFontColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(`${e.target.value}`);
  };

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(Number(e.target.value));
  };

  const handleBorderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorder(Number(e.target.value));
  };

  const handleBorderColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor(e.target.value);
  };

  const handleBoxShadowYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadowY(Number(e.target.value));
  };

  const handleBoxShadowXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadowX(Number(e.target.value));
  };

  const handleBoxShadowBlurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadowBlur(Number(e.target.value));
  };

  const handleBoxShadowColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadowColor(e.target.value);
  };

  const handleBoxShadowSpreadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxShadowSpread(Number(e.target.value));
  };

  const handleHoverBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHoverBrightness(Number(e.target.value));
  };

  const handleHoverScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHoverScale(Number(e.target.value));
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHoverColor(e.target.value);
  };

  const handleHoverBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHoverBackgroundColor(e.target.value);
  };

  return (
    <section className={styles.workbench}>
      <div className={styles["workbench__left"]}>
        <LeftSection />
      </div>

      <div className={styles["workbench__middle"]}>
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
          boxShadowY={boxShadowY}
          boxShadowX={boxShadowX}
          boxShadowBlur={boxShadowBlur}
          boxShadowColor={boxShadowColor}
          boxShadowSpread={boxShadowSpread}
          isHoverBrightness={isHoverBrightness}
          isHoverScale={isHoverScale}
          isHoverColor={isHoverColor}
          isHoverBackgroundColor={isHoverBackgroundColor}
          transition={transition}
        />
        <Languages
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
          boxShadowY={boxShadowY}
          boxShadowX={boxShadowX}
          boxShadowBlur={boxShadowBlur}
          boxShadowColor={boxShadowColor}
          boxShadowSpread={boxShadowSpread}
          isHoverBrightness={isHoverBrightness}
          isHoverScale={isHoverScale}
          isHoverColor={isHoverColor}
          isHoverBackgroundColor={isHoverBackgroundColor}
        />
      </div>

      <div className={styles["workbench__right"]}>
        <Font
          onFontSizeChange={handleFontSizeChange}
          fontSize={fontSize}
          fontWeight={fontWeight}
          onFontWeightChange={handleFontWeightChange}
          onInnerTextChange={handleInnerText}
          innerText={innerText}
        />
        <Box
          onBorderRadiusChange={handleBorderRadiusChange}
          borderRadius={borderRadius}
          onChangeBorder={handleBorderChange}
          onPaddingYChange={handlePaddingYChange}
          onPaddingXChange={handlePaddingXChange}
          border={border}
          paddingY={paddingY}
          paddingX={paddingX}
          boxShadowY={boxShadowY}
          boxShadowX={boxShadowX}
          boxShadowBlur={boxShadowBlur}
          boxShadowColor={boxShadowColor}
          boxShadowSpread={boxShadowSpread}
          onBoxShadowYChange={handleBoxShadowYChange}
          onBoxShadowXChange={handleBoxShadowXChange}
          onBoxShadowBlurChange={handleBoxShadowBlurChange}
          onBoxShadowColorChange={handleBoxShadowColorChange}
          onBoxShadowSpreadChange={handleBoxShadowSpreadChange}
        />
        <Color
          onFontColorChange={handleFontColorChange}
          fontColor={fontColor}
          onBorderColorChange={handleBorderColorChange}
          borderColor={borderColor}
          onBackgroundColorChange={handleChangebackgroundColor}
          backgroundColor={backgroundColor}
        />
        <State
          onHoverScaleChange={handleHoverScaleChange}
          onHoverBrightnessChange={handleHoverBrightnessChange}
          isHoverScale={isHoverScale}
          isHoverBrightness={isHoverBrightness}
          isHoverColor={isHoverColor}
          onHoverColorChange={handleHoverColorChange}
          isHoverBackgroundColor={isHoverBackgroundColor}
          onHoverBackgroundColorChange={handleHoverBackgroundColorChange}
          transition={transition}
          onTransitionChange={handleTransition}
        />
      </div>
    </section>
  );
};
