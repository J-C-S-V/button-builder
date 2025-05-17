export const ChangePadding = ({
  onPaddingChange,
  padding,
}: {
  onPaddingChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  padding: number;
}) => {
  return (
    <>
      <label title="Enter padding" htmlFor="padding">
        Padding:
      </label>
      <input
        type="number"
        className="workbench__input-padding"
        id="padding"
        placeholder={padding.toString()}
        min={0}
        value={padding}
        onChange={onPaddingChange}
      />
    </>
  );
};
