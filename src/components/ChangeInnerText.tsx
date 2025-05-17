export const ChangeInnerText = ({
  onTextChange,
}: {
  onTextChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return <textarea onChange={onTextChange} placeholder="Change text..." />;
};
