import { useState } from "react";
import { Controls } from "./Controls";
import { ControlsTwo } from "./ControlsTwo";
import { CodeArea } from "./CodeArea";

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
    setFontColor(e.target.value);
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
    <section className="workbench">
      <Controls
        onTextChange={handleInnerText}
        innerText={innerText}
        onBackgroundColorChange={handleChangebackgroundColor}
        backgroundColor={backgroundColor}
        onFontColorChange={handleFontColorChange}
        fontColor={fontColor}
        onBorderRadiusChange={handleBorderRadiusChange}
        borderRadius={borderRadius}
        onPaddingYChange={handlePaddingYChange}
        paddingY={paddingY}
        onPaddingXChange={handlePaddingXChange}
        paddingX={paddingX}
        onFontSizeChange={handleFontSizeChange}
        fontSize={fontSize}
      />
      <ControlsTwo
        fontWeight={fontWeight}
        onFontWeightChange={handleFontWeightChange}
        border={border}
        onBorderChange={handleBorderChange}
        borderColor={borderColor}
        onBorderColorChange={handleBorderColorChange}
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
      <CodeArea
        innerText={innerText}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        paddingY={paddingY}
        paddingX={paddingX}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        border={border}
        borderColor={borderColor}
        boxShadowY={boxShadowY}
        boxShadowX={boxShadowX}
        boxShadowBlur={boxShadowBlur}
        boxShadowColor={boxShadowColor}
        boxShadowSpread={boxShadowSpread}
      />
    </section>
  );
};
