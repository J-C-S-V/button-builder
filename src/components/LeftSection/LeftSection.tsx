import { DarkMode } from "./components/DarkMode";
import { Profile } from "./components/Profile";
import { Title } from "./components/Title";
import { ButtonGroup } from "./components/ButtonGroup";
import type { CSSProperties } from "react";
import styles from "./LeftSection.module.css";

export const LeftSection = ({
  onClickButton,
}: {
  onClickButton: (style: CSSProperties) => void;
}) => {
  return (
    <>
      <div className={styles["left-section__header"]}>
        <div className={styles["left-section__title-darkmode"]}>
          <Title />
          <DarkMode />
        </div>
        <Profile />
      </div>
      <ButtonGroup onClickButton={onClickButton} />
    </>
  );
};
