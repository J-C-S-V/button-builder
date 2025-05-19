export const ChangeFontColor = ({
    fontColor,
    onFontColorChange,
}: {
    fontColor: string;
    onFontColorChange: ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            <label htmlFor="fontColor">Font Color:</label>
            <div className="workbench__input-color">
                <input className="workbench__input-font-color" type="color" id="fontColor" value={fontColor} onChange={onFontColorChange} />
                <input type="text" className="workbench__font-color-preview" value={fontColor} onChange={onFontColorChange} />
            </div>
        </>
    );
};