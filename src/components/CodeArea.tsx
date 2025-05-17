export const CodeArea = ({ color }: { color: string }) => {
  return (
    <>
      <h2>CSS code</h2>
      <textarea
        rows={10}
        cols={50}
        disabled
        value={`.button {
            cursor: pointer;
            background-color: ${color};

        }`}
      />
    </>
  );
};
