type LimitSelectorProps = {
  limit: number;
  onLimitChange: React.Dispatch<React.SetStateAction<number>>;
};

const LimitSelector = ({ limit, onLimitChange }: LimitSelectorProps) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="limit">Show:</label>
      <select
        className="py-2 px-4 bg-white rounded-xl outline-none "
        value={limit}
        id="limit"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default LimitSelector;
