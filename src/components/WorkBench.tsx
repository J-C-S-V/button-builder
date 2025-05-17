import { useState } from "react";
import { Button } from "./Button";
import { ChangeColor } from "./ChangeColor";
import { CodeArea } from "./CodeArea";
import { ChangeInnerText } from "./ChangeInnerText";

export const WorkBench = () => {
  const [color, setColor] = useState("#3498db");
  const [innerText, setInnerText] = useState("CTA Button");

  const handleChangeColor = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setColor(value);
  };

  const handleInnerText = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInnerText(value);
  };

  return (
    <aside className="workbench">
      <Button color={color} innerText={innerText}></Button>
      <ChangeColor onColorChange={handleChangeColor} />
      <CodeArea color={color} />
      <ChangeInnerText onTextChange={handleInnerText} />
    </aside>
  );
};
