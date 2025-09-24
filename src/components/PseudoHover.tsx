/**
 * A reusable control component that toggles whether the preview should simulate a hover state.
 *
 * @param {Object} props
 * @param {boolean} props.isHover - Whether the preview should simulate a hover state.
 * @param {Function} props.onChange - A callback function that is called when the checkbox is changed.
 * @returns {React.ReactElement}
 */
export const PseudoHover = ({
  isHover,
  onChange,
}: {
  isHover: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="workbench__control">
      <label htmlFor="pseudo-hover" className="label">
        Hover state
      </label>
      <input id="pseudo-hover" type="checkbox" checked={isHover} onChange={onChange} />
    </div>
  );
};
