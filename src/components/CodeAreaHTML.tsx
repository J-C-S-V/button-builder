export const CodeAreaHTML = ({ innerText }: { innerText: string }) => {
  return (
    <>
      <h2>HTML code</h2>
      <textarea
        rows={5}
        cols={50}
        disabled
        value={`<a class="button">${innerText}</a>`}
      />
    </>
  );
};
