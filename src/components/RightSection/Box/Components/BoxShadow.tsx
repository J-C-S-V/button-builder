import style from "./BoxShadow.module.css";

export const BoxShadow = ({
  onBoxShadowYChange,
  onBoxShadowXChange,
  onBoxShadowBlurChange,
  onBoxShadowColorChange,
  onBoxShadowSpreadChange,
  boxShadowY,
  boxShadowX,
  boxShadowBlur,
  boxShadowColor,
  boxShadowSpread,
}: {
  onBoxShadowYChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowXChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowBlurChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBoxShadowSpreadChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boxShadowY: number;
  boxShadowX: number;
  boxShadowBlur: number;
  boxShadowColor: string;
  boxShadowSpread: number;
}) => {
  return (
    <div className={style["box-shadow"]}>
      <label title="Enter Y position" htmlFor="box-shadow-y" className={style["box-shadow__label"]}>
        Box Shadow:
      </label>
      <div className={style["box-shadow__container"]}>
        <div className={style["box-shadow__coordinates"]}>
          <div className={style["box-shadow__x"]}>
            <input
              type="range"
              className={style["box-shadow__input-x"]}
              min={-50}
              max={50}
              step={1}
              id="box-shadow-x"
              value={boxShadowX}
              onChange={onBoxShadowXChange}
            />
            <span className={style["box-shadow__span"]}>X &nbsp;&nbsp;{boxShadowX}px</span>
          </div>
          <div className={style["box-shadow__y"]}>
            <input
              type="range"
              className={style["box-shadow__input-y"]}
              min={-50}
              max={50}
              step={1}
              id="box-shadow-y"
              value={boxShadowY}
              onChange={onBoxShadowYChange}
            />
            <span className={style["box-shadow__span"]}>Y &nbsp;&nbsp;{boxShadowY}px</span>
          </div>
        </div>

        <div className={style["box-shadow__blur"]}>
          <label title="Enter blur position" htmlFor="box-shadow-blur" className={style["box-shadow__label"]}>
            Blur:
          </label>
          <div className={style["box-shadow__blur-container"]}>
            <input
              type="range"
              className={style["box-shadow__input-blur"]}
              id="box-shadow-blur"
              min={0}
              max={50}
              step={1}
              value={boxShadowBlur}
              onChange={onBoxShadowBlurChange}
            />
            <span className={style["box-shadow__span"]}>{boxShadowBlur}px</span>
          </div>
        </div>
        <div className={style["box-shadow__spread"]}>
          <label className={style["box-shadow__label"]} title="Enter spread position" htmlFor="box-shadow-spread">
            Spread:
          </label>
          <div className={style["box-shadow__spread-container"]}>
            <input
              type="range"
              className={style["box-shadow__input-spread"]}
              id="box-shadow-spread"
              min={0}
              max={50}
              step={1}
              value={boxShadowSpread}
              onChange={onBoxShadowSpreadChange}
            />
            <div className={style["box-shadow__span-container"]}>
              <span className={style["box-shadow__span"]}>{boxShadowSpread}px</span>
            </div>
          </div>
        </div>

        <div className={style["box-shadow__color"]}>
          <label title="Enter color" htmlFor="box-shadow-color" className={style["box-shadow__label"]}>
            Color:
          </label>
          <div className={style["box-shadow__color-container"]}>
            <input
              type="color"
              className={style["box-shadow__input-color"]}
              id="box-shadow-color"
              value={boxShadowColor}
              onChange={onBoxShadowColorChange}
            />
            <input
              type="text"
              className={style["box-shadow__input-text"]}
              value={boxShadowColor}
              onChange={onBoxShadowColorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
