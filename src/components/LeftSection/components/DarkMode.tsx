import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../../../../public/assets/svg/Icons";
import styles from "./DarkMode.module.css";

export const DarkMode = () => {
  const { handleClickTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles["dark-mode"]} onClick={handleClickTheme}>
      {/* {theme === "dark" ? <SunIcon /> : <MoonIcon />} */}
      <div className={styles["dark-mode"]}>
        <span className={styles["dark-mode__sun"]}>
          <SunIcon />
        </span>
        <span className={styles["dark-mode__moon"]}>
          <MoonIcon />
        </span>
      </div>
    </div>
  );
};
