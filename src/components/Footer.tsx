import { IconGithub } from "../assets/Icons";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from "./Footer.module.css";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__text"]}>© 2025 Free Button Builder. All rights reserved. Made with ❤ by Juan Sanchez.</p>
      <a className={styles["footer__anchor"]} target="_blank" href="https://github.com/J-C-S-V">
        <span className={styles["footer__tooltip"]}>
          <IconGithub theme={theme} />
        </span>
      </a>
    </footer>
  );
};
