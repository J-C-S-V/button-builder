export const ChangeFontWeight = ({
    fontWeight,
    onFontWeightChange,
}: {
    fontWeight: number;
    onFontWeightChange: ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            <label htmlFor="fontWeight" className="label">Font Weight:</label>
            <input className="workbench__input-font-weight" type="number" id="fontWeight" min={100} max={900} step={100} value={fontWeight} onChange={onFontWeightChange} />
        </>
    );
};