import styles from "./ChangeInnerText.module.css";

export const ChangeInnerText = ({
  onTextChange,
  innerText,
}: {
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  innerText: string;
}) => {
  return (
    <div className={styles["inner-text"]}>
      <label htmlFor="innerText" className={styles["inner-text__label"]}>
        Button Text:
      </label>
      <input
        type="text"
        className={styles["inner-text__input"]}
        id="innerText"
        onChange={onTextChange}
        placeholder="Change text..."
        value={innerText}
      />
    </div>
  );
};
