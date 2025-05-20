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
// import { ChangeShadow } from "./ChangeShadow";

export const WorkBench = () => {
  const [fontColor, setFontColor] = useState("#fff");
  const [color, setColor] = useState("#978aff");
  const [innerText, setInnerText] = useState("Click me!");
  const [borderRadius, setBorderRadius] = useState(5);
  // const [isBorderActive, setIsBorderActive] = useState(false);
  const [paddingY, setPaddingY] = useState(4);
  const [paddingX, setPaddingX] = useState(25);
  const [fontWeight, setFontWeight] = useState(600);
  const [fontSize, setFontSize] = useState(25);
  // const [shadow, setShadow] = useState('0 4px 6px rgba(0, 0, 0, 0.1)');


  const handleChangeColor = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setColor(value);
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

  // const handleShadowChange = ({
  //   target,
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   setShadow(target.value);
  // };

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
        <ChangeColor color={color} onColorChange={handleChangeColor} />
        <ChangeBorderRadius
          onBorderRadiusChange={handleBorderRadiusChange}
          borderRadius={borderRadius}
          // isBorderActive={isBorderActive}
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
        {/* <ChangeShadow
          shadow={shadow}
          onShadowChange={handleShadowChange}
        /> */}
      </div>
      <aside className="workbench__preview">
        <Button
          color={color}
          innerText={innerText}
          borderRadius={borderRadius}
          paddingY={paddingY}
          paddingX={paddingX}
          fontWeight={fontWeight}
          fontSize={fontSize}
          fontColor={fontColor}
          // shadow={shadow}
        ></Button>
        <CodeAreaCSS
          borderRadius={borderRadius}
          color={color}
          paddingY={paddingY}
          paddingX={paddingX}
          fontWeight={fontWeight}
          fontSize={fontSize}
          fontColor={fontColor}
          // shadow={shadow}
        />
        <CodeAreaHTML innerText={innerText} />
      </aside>
    </section>
  );
};
