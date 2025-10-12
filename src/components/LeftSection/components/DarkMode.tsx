import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../../../../public/assets/svg/Icons";
import styles from "./DarkMode.module.css";

export const DarkMode = () => {
  const { handleClickTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles["dark-mode"]} onClick={handleClickTheme}>
      <MoonIcon theme={theme} />
      <div className={styles["dark-mode__icon-bg"]}>
        <div className={`${styles["dark-mode__icon-circle"]} ${theme === "dark" ? "" : styles["right"]}`}></div>
      </div>
      <SunIcon theme={theme} />
    </div>
  );
};
