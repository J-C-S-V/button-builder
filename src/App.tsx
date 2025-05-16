import { Button } from "@/components/Button";
import { ChangeColor } from "@/components/ChangeColor";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");
  const [fontWeight, setFontWeight] = useState("normal");
  const [width, setWidth] = useState(100);
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    // console.log(e.target.value);
  };

  const handleChangeFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontWeight(e.target.value);
    // console.log(e.target.value);
  };

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value));
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Hello</h1>
      <Button color={color} fontWeight={fontWeight} width={width}>
        Primary
      </Button>
      <ChangeColor
        valueColor={color}
        onColorChange={handleChangeColor}
        onFontChange={handleChangeFont}
        valueFront={fontWeight}
        onWidthChange={handleChangeWidth}
        width={width}
      />
    </>
  );
}

export default App;
