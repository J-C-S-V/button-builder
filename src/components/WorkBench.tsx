import { useState } from "react";
import { Button } from "./Button";
import { ChangeColor } from "./ChangeColor";
import { CodeAreaCSS } from "./CodeAreaCSS";
import { ChangeInnerText } from "./ChangeInnerText";
import { CodeAreaHTML } from "./CodeAreaHTML";
import { ChangeBorderRadius } from "./ChangeBorderRadius";
import { ChangePadding } from "./ChangePadding";
import { ChangeFontWeight } from "./ChangeFontWeight";
import { ChangeFontSize } from "./ChangeFontSize";
import { ChangeFontColor } from "./ChangeFontColor";  

export const WorkBench = () => {
  const [fontColor, setFontColor] = useState("#fff");
  const [backgroundColor, setBackgroundColor] = useState("#a5158c");
  const [innerText, setInnerText] = useState("Click me!");
  const [borderRadius, setBorderRadius] = useState(5);
  const [paddingY, setPaddingY] = useState(4);
  const [paddingX, setPaddingX] = useState(25);
  const [fontWeight, setFontWeight] = useState(600);
  const [fontSize, setFontSize] = useState(25);


  const handleChangeColor = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(value);
  };

  const handleInnerText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInnerText(value);
  };

  const handleBorderRadiusChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    // setIsBorderActive(checked);
    // setBorderRadius(checked ? 20 : 0);
    console.log(typeof target.value);
    setBorderRadius(Number(target.value));
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

  return (
    <section className="workbench">
      <div className="workbench__controls">
        <ChangeInnerText onTextChange={handleInnerText} innerText={innerText} />
        <ChangeFontColor
          fontColor={fontColor}
          onFontColorChange={handleFontColorChange}
        />
        <ChangeColor
          color={backgroundColor}
          onColorChange={handleChangeColor}
        />
        <ChangeBorderRadius
          onBorderRadiusChange={handleBorderRadiusChange}
          borderRadius={borderRadius}
        />
        <ChangePadding
          paddingY={paddingY}
          paddingX={paddingX}
          onPaddingYChange={handlePaddingYChange}
          onPaddingXChange={handlePaddingXChange}
        />
        <ChangeFontWeight
          fontWeight={fontWeight}
          onFontWeightChange={handleFontWeightChange}
        />
        <ChangeFontSize
          fontSize={fontSize}
          onFontSizeChange={handleFontSizeChange}
        />
      </div>
      
      <aside className="workbench__preview">
        <Button
          backgroundColor={backgroundColor}
          innerText={innerText}
          borderRadius={borderRadius}
          paddingY={paddingY}
          paddingX={paddingX}
          fontWeight={fontWeight}
          fontSize={fontSize}
          fontColor={fontColor}
        ></Button>
        <CodeAreaCSS
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          paddingY={paddingY}
          paddingX={paddingX}
          fontWeight={fontWeight}
          fontSize={fontSize}
          fontColor={fontColor}
        />
        <CodeAreaHTML innerText={innerText} />
      </aside>
    </section>
  );
};
