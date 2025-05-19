export const ChangeShadow = ({
    shadow,
    onShadowChange,
}: {
    shadow: string;
    onShadowChange: ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            <label htmlFor="shadow">Shadow:</label>
            <input className="workbench__input-shadow" type="text" id="shadow" value={shadow} onChange={onShadowChange} />
        </>
    );
};