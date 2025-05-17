import { useState } from "react";
import { Button } from "./Button";
import { ChangeColor } from "./ChangeColor";
import { CodeArea } from "./CodeArea";
import { ChangeInnerText } from "./ChangeInnerText";
import { CodeAreaHTML } from "./CodeAreaHTML";

export const WorkBench = () => {
  const [color, setColor] = useState("#3498db");
  const [innerText, setInnerText] = useState("Click me!");

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
    <section className="workbench">
      <div className="workbench__controls">
        <ChangeInnerText onTextChange={handleInnerText} innerText={innerText} />
        <ChangeColor onColorChange={handleChangeColor} />
      </div>
      <aside className="workbench__preview">
        <Button color={color} innerText={innerText}></Button>
        <CodeArea color={color} />
        <CodeAreaHTML innerText={innerText} />
      </aside>
    </section>
  );
};
