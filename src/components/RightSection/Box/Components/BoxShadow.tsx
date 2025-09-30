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
    <>
      <label title="Enter Y position" htmlFor="box-shadow-y" className={style["box-shadow__label"]}>
        Box Shadow:
      </label>
      <div className={style["box-shadow__wrapper"]}>
        <div className={style["box-shadow__wrapper-coordinates"]}>
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
            <span className={style["box-shadow__shadow-x"]}>X &nbsp;&nbsp;{boxShadowX}px</span>
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
            <span className={style["box-shadow__shadow-y"]}>Y &nbsp;&nbsp;{boxShadowY}px</span>
          </div>
        </div>

        <div className={style["box-shadow__wrapper-blur-spread"]}>
          <div className={style["box-shadow__blur"]}>
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
            <span className={style["box-shadow__blur-span"]}>Blur &nbsp;&nbsp;{boxShadowBlur}px</span>
          </div>
          <div className={style["box-shadow__spread"]}>
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
            <span className={style["box-shadow__spread-span"]}>Spread &nbsp;&nbsp;{boxShadowSpread}px</span>
          </div>
        </div>

        <div className={style["box-shadow__color"]}>
          <input
            type="color"
            className={style["box-shadow__input-color"]}
            id="box-shadow-color"
            value={boxShadowColor}
            onChange={onBoxShadowColorChange}
          />
          <input
            type="text"
            className={style["box-shadow__color-preview"]}
            value={boxShadowColor}
            onChange={onBoxShadowColorChange}
          />
        </div>
      </div>
    </>
  );
};
