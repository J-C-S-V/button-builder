export const ChangeBoxShadow = ({
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
    onBoxShadowYChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBoxShadowXChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBoxShadowBlurChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBoxShadowColorChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    onBoxShadowSpreadChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    boxShadowY: number;
    boxShadowX: number;
    boxShadowBlur: number;
    boxShadowColor: string;
    boxShadowSpread: number;
  }) => {
    return (
      <>
        <label title="Enter Y position" htmlFor="box-shadow-y" className="label">
          Box Shadow:
        </label>
        <div className="workbench__box-shadow-wrapper">
        <div className="workbench__box-shadow-x">
            <input
              type="number"
              className="workbench__input-box-shadow-x"
              id="box-shadow-x"
              value={boxShadowX}
              onChange={onBoxShadowXChange}
            />
            <span className="workbench__shadow-x">X</span>
          </div>
          <div className="workbench__box-shadow-y">
            <input
              type="number"
              className="workbench__input-box-shadow-y"
              id="box-shadow-y"
              value={boxShadowY}
              onChange={onBoxShadowYChange}
            /> <span className="workbench__box-shadow-y">Y</span>
          </div>
          <div className="workbench__box-shadow-blur">
            <input
              type="number"
              className="workbench__input-box-shadow-blur"
              id="box-shadow-blur"
              min={0}
              value={boxShadowBlur}
              onChange={onBoxShadowBlurChange}
            />
            <span className="workbench__box-shadow-blur">Blur</span>
          </div>
          <div className="workbench__box-shadow-spread">
            <input
              type="number"
              className="workbench__input-box-shadow-spread"
              id="box-shadow-spread"
              min={0}
              value={boxShadowSpread}
              onChange={onBoxShadowSpreadChange}
            />
            <span className="workbench__box-shadow-spread">Spread</span>
          </div>
          <div className="workbench__box-shadow-color">
            <input
              type="color"
              className="workbench__input-box-shadow-color"
              id="box-shadow-color"
              value={boxShadowColor}
              onChange={onBoxShadowColorChange}
            />
            <span className="workbench__box-shadow-color">Color</span>
          </div>
        </div>
      </>
    );
  };
  