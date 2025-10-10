import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../../../../public/assets/svg/Icons";
import styles from "./DarkMode.module.css";

export const DarkMode = () => {
  const { handleClickTheme, theme, right } = useContext(ThemeContext);

  return (
    <div className={styles["dark-mode"]} onClick={handleClickTheme}>
      <SunIcon />
      <div className={styles["dark-mode__icon-bg"]}>
        <div className={styles["dark-mode__icon-circle"]}></div>
      </div>
      <MoonIcon />
    </div>
  );
};
