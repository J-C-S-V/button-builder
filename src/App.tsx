import { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { WorkBench } from "./components/WorkBench";
import { Footer } from "./components/Footer";
import { MoonIcon, SunIcon } from "../public/assets/svg/Icons";
import "./App.css";

const Test = () => {
  const [name, setName] = useState("Taylor");
  const handleClickTest = () => {
    const newName = "Robin"; // Use the value you're setting
    setName(newName);
    console.log(newName);
  };

  return (
    <>
      <h1 onClick={handleClickTest}>{name}</h1>
    </>
  );
};

function App() {
  const { theme, handleClickTheme } = useContext(ThemeContext);

  return (
    <main data-theme={theme} className="app">
      <ul className="theme-button">
        <li className="theme-button__moon">
          <SunIcon />
        </li>
        <li onClick={handleClickTheme} className="theme-button__icon">
          <div className="theme-button__icon-bg">
            <div
              className={`theme-button__icon-circle ${
                theme === "dark" ? "right" : ""
              }`}
            ></div>
          </div>
        </li>
        <li className="theme-button__sun">
          <MoonIcon />
        </li>
      </ul>
      <h1 className="app__title">
        <span className="app__title-span-1">Free</span>&nbsp;
        <span className="app__title-span-2">Button</span>&nbsp;
        <span className="app__title-span-3">Builder</span>
      </h1>
      <WorkBench />
      <Footer />
      <Test />
    </main>
  );
}

export default App;






const myObject = {
  firstName: "Jota",
  lastName: 'Doe',
  email: 'john@example.com',
};

const myObjectTwo = {
  firstName: "Jota",
  lastName: 'Doe',
  email: 'john@example.com',
  firstName: "Juan"
};

const myObjectTwo = {
  firstName: "Juan"
  lastName: 'Doe',
  email: 'john@example.com'
};