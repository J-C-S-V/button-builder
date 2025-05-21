export const ChangeBorder = ({ onBorderChange, border }:{onBorderChange: (e: React.ChangeEvent<HTMLInputElement>) => void; border: number}) => {
  return (
    <>
      <label className="label" title="Enter border" htmlFor="border">
        Border width:
      </label>
      <input
        className="workbench__input-border"
        type="number"
        id="border"
        onChange={onBorderChange}
        value={border}
        min={0}
        max={50}
      />
    </>
  )
}