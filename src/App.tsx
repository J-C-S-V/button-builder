import { useState } from "react";
import { Button } from "@/components/Button";
import { ChangeColor } from "@/components/ChangeColor";
import { CodeArea } from "./components/CodeArea";

import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Hello</h1>
      <Button color={color}>Primary</Button>
      <ChangeColor valueColor={color} onColorChange={handleChangeColor} />
      <CodeArea color={color} />
    </>
  );
}

export default App;
