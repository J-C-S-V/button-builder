import { useState } from "react";
import { Button } from "./Button";
import { ChangeColor } from "./ChangeColor";
import { CodeArea } from "./CodeArea";
import { ChangeInnerText } from "./ChangeInnerText";
import { CodeAreaHTML } from "./CodeAreaHTML";
import { BorderRadius } from "./BorderRadius";
import { Padding } from "./Padding";

export const WorkBench = () => {
  const [color, setColor] = useState("#3498db");
  const [innerText, setInnerText] = useState("Click me!");
  const [borderRadius, setBorderRadius] = useState(10);
  // const [isBorderActive, setIsBorderActive] = useState(false);
  const [padding, setPadding] = useState(10);

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

  return (
    <section className="workbench">
      <div className="workbench__controls">
        <ChangeInnerText onTextChange={handleInnerText} innerText={innerText} />
        <ChangeColor onColorChange={handleChangeColor} />
        <BorderRadius
          onBorderRadiusChange={handleBorderRadiusChange}
          // isBorderActive={isBorderActive}
        />
        <Padding onPaddingChange={handlePaddingChange} />
      </div>
      <aside className="workbench__preview">
        <Button
          color={color}
          innerText={innerText}
          borderRadius={borderRadius}
          padding={padding}
        ></Button>
        <CodeArea color={color} />
        <CodeAreaHTML innerText={innerText} />
      </aside>
    </section>
  );
};
