export const CodeArea = ({ color }: { color: string }) => {
  return (
    <>
      <h2>Code Area</h2>
      <textarea
        rows={20}
        cols={50}
        disabled
        value={`.button {

            background-color: ${color};
        }`}
      />
    </>
  );
};
