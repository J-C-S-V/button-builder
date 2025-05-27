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
        <div className="workbench__box-shadow-wrapper-coordinates">
          <div className="workbench__box-shadow-x">
            <input
              type="range"
              className="workbench__input-box-shadow-x"
              min={-50}
              max={50}
              step={1}
              id="box-shadow-x"
              value={boxShadowX}
              onChange={onBoxShadowXChange}
            />
            <span className="workbench__shadow-x">X &nbsp;&nbsp;{boxShadowX}px</span>
          </div>
          <div className="workbench__box-shadow-y">
            <input
              type="range"
              className="workbench__input-box-shadow-y"
              min={-50}
              max={50}
              step={1}
              id="box-shadow-y"
              value={boxShadowY}
              onChange={onBoxShadowYChange}
            />
            <span className="workbench__shadow-y">Y &nbsp;&nbsp;{boxShadowY}px</span>
          </div>
        </div>

        <div className="workbench__box-shadow-wrapper-blur-spread">
          <div className="workbench__box-shadow-blur">
            <input
              type="range"
              className="workbench__input-box-shadow-blur"
              id="box-shadow-blur"
              min={0}
              max={50}
              step={1}
              value={boxShadowBlur}
              onChange={onBoxShadowBlurChange}
            />
            <span className="workbench__box-shadow-blur-span">Blur &nbsp;&nbsp;{boxShadowBlur}px</span>
          </div>
          <div className="workbench__box-shadow-spread">
            <input
              type="range"
              className="workbench__input-box-shadow-spread"
              id="box-shadow-spread"
              min={0}
              max={50}
              step={1}
              value={boxShadowSpread}
              onChange={onBoxShadowSpreadChange}
            />
            <span className="workbench__box-shadow-spread-span">Spread &nbsp;&nbsp;{boxShadowSpread}px</span>
          </div>
        </div>

        <div className="workbench__box-shadow-color">
          <input
            type="color"
            className="workbench__input-box-shadow-color"
            id="box-shadow-color"
            value={boxShadowColor}
            onChange={onBoxShadowColorChange}
          />
          <input
            type="text"
            className="workbench__box-shadow-color-preview"
            value={boxShadowColor}
            onChange={onBoxShadowColorChange}
          />
        </div>
      </div>
    </>
  );
};
