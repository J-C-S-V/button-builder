export const Padding = ({
  onPaddingChange,
}: {
  onPaddingChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
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
        placeholder="10"
        min={0}
        // value={10}
        onChange={onPaddingChange}
      />
    </>
  );
};
