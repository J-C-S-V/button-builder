import { buttonsStyle } from "../../data/buttonsStyle";
import styles from "./LeftSection.module.css";

export const LeftSection = ({ handleClickButtonOne }: { handleClickButtonOne: (e: any) => void }) => {
  return (
    <div className={styles["left-section"]}>
      <button onClick={() => handleClickButtonOne(buttonsStyle[0].style)} style={buttonsStyle[0].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[1].style)} style={buttonsStyle[1].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[2].style)} style={buttonsStyle[2].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[3].style)} style={buttonsStyle[3].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[4].style)} style={buttonsStyle[4].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[5].style)} style={buttonsStyle[5].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[6].style)} style={buttonsStyle[6].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[7].style)} style={buttonsStyle[7].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[8].style)} style={buttonsStyle[8].style}>
        Click me!
      </button>
      <button onClick={() => handleClickButtonOne(buttonsStyle[9].style)} style={buttonsStyle[9].style}>
        Click me!
      </button>
    </div>
  );
};
