import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { WorkBench } from "./components/WorkBench";
import "./App.module.css";
// import { Profile } from "./components/Profile";

function App() {
  const { theme, handleClickTheme } = useContext(ThemeContext);

  return (
    <main data-theme={theme} className="app">
      <WorkBench />
    </main>
  );
}

export default App;
