import { useState } from "react";
import { LeftSection } from "../LeftSection/LeftSection";
import { Button } from "../MidSection/Button/Button";
import { Languages } from "../MidSection/Languages/Languages";
import { Box } from "../RightSection/Box/Box";
import { Color } from "../RightSection/Color/Color";
import { State } from "../RightSection/State/State";
import { Font } from "../RightSection/Font/Font";
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
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [boxShadowX, setBoxShadowX] = useState(-7);
  const [boxShadowY, setBoxShadowY] = useState(7);
  const [boxShadowBlur, setBoxShadowBlur] = useState(0);
  const [boxShadowSpread, setBoxShadowSpread] = useState(0);
  const [boxShadowColor, setBoxShadowColor] = useState("#c2c2c2");
  const [hoverBrightness, setHoverBrightness] = useState(1);
  const [hoverScale, setHoverScale] = useState(1.1);
  const [hoverColor, setHoverColor] = useState("#ffffff");
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState("#000000");
  const [transition, setTransition] = useState(0.1);

  const handleTransitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransition(Number(e.target.value));
  };

  const handleInnerTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerText(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setFontColor(e.target.value);
  };

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(Number(e.target.value));
  };

  const handleBorderWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderWidth(Number(e.target.value));
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
    setHoverBrightness(Number(e.target.value));
  };

  const handleHoverScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoverScale(Number(e.target.value));
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoverColor(e.target.value);
  };

  const handleHoverBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoverBackgroundColor(e.target.value);
  };

  const handleClickButton = (style: any) => {
    setbackgroundColor(style.backgroundColor);
    setFontColor(style.color);
    setBorderColor(style.border.split(" ")[2]);
    setFontWeight(Number(style.fontWeight));

    setFontSize(() => {
      const result = style.fontSize.replace("px", "");
      return Number(result);
    });
    setBorderRadius(() => {
      const result = style.borderRadius.replace("px", "");
      return Number(result);
    });
    setBorderWidth(() => {
      const result = style.border.split(" ")[0].replace("px", "");
      return Number(result);
    });
    setPaddingY(() => {
      const result = style.padding.split(" ")[0].replace("px", "");
      return Number(result);
    });
    setPaddingX(() => {
      const result = style.padding.split(" ")[1].replace("px", "");
      return Number(result);
    });

    setBoxShadowX(() => {
      if (!style.boxShadow) return 0;
      const result = style.boxShadow.split(" ")[0].replace("px", "");
      return Number(result);
    });
    setBoxShadowY(() => {
      if (!style.boxShadow) return 0;
      const result = style.boxShadow.split(" ")[1].replace("px", "");
      return Number(result);
    });
    setBoxShadowBlur(() => {
      if (!style.boxShadow) return 0;
      const result = style.boxShadow.split(" ")[2].replace("px", "");
      return Number(result);
    });
    setBoxShadowSpread(() => {
      if (!style.boxShadow) return 0;
      const result = style.boxShadow.split(" ")[3].replace("px", "");
      return Number(result);
    });
    setBoxShadowColor(() => {
      if (!style.boxShadow) return "#c2c2c2";
      const result = style.boxShadow.split(" ")[4];
      return result;
    });
  };

  return (
    <section className={styles["workbench"]}>
      <div className={styles["workbench__left"]}>
        <LeftSection onClickButton={handleClickButton} />
      </div>

      <div className={styles["workbench__middle"]}>
        <Button
          borderWidth={borderWidth}
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
          hoverBrightness={hoverBrightness}
          hoverScale={hoverScale}
          hoverColor={hoverColor}
          hoverBackgroundColor={hoverBackgroundColor}
          transition={transition}
        />
        <Languages
          borderWidth={borderWidth}
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
          hoverBrightness={hoverBrightness}
          hoverScale={hoverScale}
          hoverColor={hoverColor}
          hoverBackgroundColor={hoverBackgroundColor}
          transition={transition}
        />
      </div>

      <div className={styles["workbench__right"]}>
        <Font
          fontSize={fontSize}
          onFontSizeChange={handleFontSizeChange}
          fontWeight={fontWeight}
          onFontWeightChange={handleFontWeightChange}
          innerText={innerText}
          onInnerTextChange={handleInnerTextChange}
        />
        <Box
          borderRadius={borderRadius}
          onBorderRadiusChange={handleBorderRadiusChange}
          borderWidth={borderWidth}
          onChangeBorderWidth={handleBorderWidthChange}
          paddingY={paddingY}
          onPaddingYChange={handlePaddingYChange}
          paddingX={paddingX}
          onPaddingXChange={handlePaddingXChange}
          boxShadowY={boxShadowY}
          onBoxShadowYChange={handleBoxShadowYChange}
          boxShadowX={boxShadowX}
          onBoxShadowXChange={handleBoxShadowXChange}
          boxShadowBlur={boxShadowBlur}
          onBoxShadowBlurChange={handleBoxShadowBlurChange}
          boxShadowColor={boxShadowColor}
          onBoxShadowColorChange={handleBoxShadowColorChange}
          boxShadowSpread={boxShadowSpread}
          onBoxShadowSpreadChange={handleBoxShadowSpreadChange}
        />
        <Color
          fontColor={fontColor}
          onFontColorChange={handleFontColorChange}
          backgroundColor={backgroundColor}
          onBackgroundColorChange={handleBackgroundColorChange}
          borderColor={borderColor}
          onBorderColorChange={handleBorderColorChange}
        />
        <State
          hoverColor={hoverColor}
          onHoverColorChange={handleHoverColorChange}
          hoverBackgroundColor={hoverBackgroundColor}
          onHoverBackgroundColorChange={handleHoverBackgroundColorChange}
          transition={transition}
          onTransitionChange={handleTransitionChange}
          hoverBrightness={hoverBrightness}
          onHoverBrightnessChange={handleHoverBrightnessChange}
          hoverScale={hoverScale}
          onHoverScaleChange={handleHoverScaleChange}
        />
      </div>
    </section>
  );
};
