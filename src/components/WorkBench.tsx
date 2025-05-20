import { useState } from "react";
import { Controls } from "./Controls";
import { CodeArea } from "./CodeArea";

export const WorkBench = () => {
  const [innerText, setInnerText] = useState("Click me!");
  const [backgroundColor, setbackgroundColor] = useState("#ff0000");
  const [borderRadius, setBorderRadius] = useState(0);
  const [paddingY, setPaddingY] = useState(0);
  const [paddingX, setPaddingX] = useState(0);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#fff");


  const handleInnerText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInnerText(value);
  };

  
  const handleChangebackgroundColor = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setbackgroundColor(value);
  };

    
  const handlePaddingYChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPaddingY(Number(target.value));
  };

  const handlePaddingXChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPaddingX(Number(target.value));
  };

  const handleFontWeightChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFontWeight(Number(target.value));
  };

  const handleFontSizeChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(target.value));
  };

  const handleFontColorChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(target.value);
  };

  const handleBorderRadiusChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(Number(target.value));
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
        onFontWeightChange={handleFontWeightChange}
        fontWeight={fontWeight}
        onFontSizeChange={handleFontSizeChange}
        fontSize={fontSize}
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
      />
    </section>
  );
};
