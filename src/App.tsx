import { useContext, useEffect } from "react";
import ThemeContext from "./context/ThemeContext";
import { WorkBench } from "./components/WorkBench";
import { Footer } from "./components/Footer";
import { MoonIcon, SunIcon } from "../public/assets/svg/Icons";
import "./App.css";

function App() {
  const { theme, handleClickTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <main className={`app ${theme}`}>
      <ul className="theme-button">
        <li className="theme-button__moon">
          <MoonIcon />
        </li>
        <li onClick={handleClickTheme} className="theme-button__icon">
          <div
            className={`theme-button__icon-bg ${
              theme === "dark" ? "right" : ""
            }`}
          >
            <div
              className={`theme-button__icon-circle ${
                theme === "dark" ? "right" : ""
              }`}
            ></div>
          </div>
        </li>
        <li className="theme-button__sun">
          <SunIcon />
        </li>
      </ul>
      <h1 className="app__title">
        <span className="app__title-span-1">Free</span>&nbsp;
        <span className="app__title-span-2">Button</span>&nbsp;
        <span className="app__title-span-3">Builder</span>
      </h1>
      <WorkBench />
      <Footer />
    </main>
  );
}

export default App;
