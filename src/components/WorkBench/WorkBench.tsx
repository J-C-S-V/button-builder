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
        />
        <Languages />
      </div>

      <div className={styles["workbench__right"]}>
        <Font
          onFontColorChange={handleFontColorChange}
          fontColor={fontColor}
          onFontSizeChange={handleFontSizeChange}
          fontSize={fontSize}
        />
        <Box onFontSizeChange={handleFontSizeChange} fontSize={fontSize} />
        <Color
          onFontColorChange={handleFontColorChange}
          fontColor={fontColor}
          onFontSizeChange={handleFontSizeChange}
          fontSize={fontSize}
        />
        <State
          onFontColorChange={handleFontColorChange}
          fontColor={fontColor}
          onFontSizeChange={handleFontSizeChange}
          fontSize={fontSize}
        />
      </div>
    </section>
  );
};
