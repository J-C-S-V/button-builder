import { buttonsStyle } from "../../data/buttonsStyle";
import styles from "./LeftSection.module.css";

export const LeftSection = ({ onClickButton }: { onClickButton: (e: any) => void }) => {
  return (
    <div className={styles["left-section"]}>
      <button onClick={() => onClickButton(buttonsStyle[0].style)} style={buttonsStyle[0].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[1].style)} style={buttonsStyle[1].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[2].style)} style={buttonsStyle[2].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[3].style)} style={buttonsStyle[3].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[4].style)} style={buttonsStyle[4].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[5].style)} style={buttonsStyle[5].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[6].style)} style={buttonsStyle[6].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[7].style)} style={buttonsStyle[7].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[8].style)} style={buttonsStyle[8].style}>
        Click me!
      </button>
      <button onClick={() => onClickButton(buttonsStyle[9].style)} style={buttonsStyle[9].style}>
        Click me!
      </button>
    </div>
  );
};
