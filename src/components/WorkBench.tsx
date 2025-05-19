import { useState } from "react";
import { Button } from "./Button";
import { ChangeColor } from "./ChangeColor";
import { CodeAreaCSS } from "./CodeAreaCSS";
import { ChangeInnerText } from "./ChangeInnerText";
import { CodeAreaHTML } from "./CodeAreaHTML";
import { ChangeBorderRadius } from "./ChangeBorderRadius";
import { ChangePadding } from "./ChangePadding";
import { ChangeFontWeight } from "./ChangeFontWeight";

export const WorkBench = () => {
  const [color, setColor] = useState("#3498db");
  const [innerText, setInnerText] = useState("Click me!");
  const [borderRadius, setBorderRadius] = useState(10);
  // const [isBorderActive, setIsBorderActive] = useState(false);
  const [padding, setPadding] = useState(10);
  const [fontWeight, setFontWeight] = useState(400);

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

  const handlePaddingChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPadding(Number(target.value));
  };

  const handleFontWeightChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFontWeight(Number(target.value));
  };

  return (
    <section className="workbench">
      <div className="workbench__controls">
        <ChangeInnerText onTextChange={handleInnerText} innerText={innerText} />
        <ChangeColor onColorChange={handleChangeColor} />
        <ChangeBorderRadius
          onBorderRadiusChange={handleBorderRadiusChange}
          borderRadius={borderRadius}
          // isBorderActive={isBorderActive}
        />
        <ChangePadding
          padding={padding}
          onPaddingChange={handlePaddingChange}
        />
        <ChangeFontWeight
          fontWeight={fontWeight}
          onFontWeightChange={handleFontWeightChange}
        />
      </div>
      <aside className="workbench__preview">
        <Button
          color={color}
          innerText={innerText}
          borderRadius={borderRadius}
          padding={padding}
          fontWeight={fontWeight}
        ></Button>
        <CodeAreaCSS
          borderRadius={borderRadius}
          color={color}
          padding={padding}
          fontWeight={fontWeight}
        />
        <CodeAreaHTML innerText={innerText} />
      </aside>
    </section>
  );
};
