import { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { WorkBench } from "./components/WorkBench";
import { Footer } from "./components/Footer";
import { MoonIcon, SunIcon } from "../public/assets/svg/Icons";
import "./App.css";

const Test = () => {
  const [name, setName] = useState({
    firstName: "Juank",
    lastName: "San",
    emailAddress: "juanksan@gmail.com",
  });
  const handleChangeTestName = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    });
  };

  const handleChangeTestLastName = (e) => {
    setName({
      ...name,
      lastName: e.target.value,
    });
  };

  const handleChangeTestEmail = (e) => {
    setName({
      ...name,
      emailAddress: e.target.value,
    });
  };

  return (
    <>
      <label htmlFor="name">Name </label>
      <input id="name" type="text" onChange={handleChangeTestName} />
      <br />

      <label htmlFor="lastName">Last Name </label>
      <input type="text" id="lastName" onChange={handleChangeTestLastName} />
      <br />

      <label htmlFor="email">Email </label>
      <input type="email" id="email" onChange={handleChangeTestEmail} />
      <h2>Name: {name.firstName}</h2>
      <h2>Last Name: {name.lastName}</h2>
      <h2>Email Address: {name.emailAddress}</h2>
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
