type FilterInputProps = {
  filter: string;
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
};

const FilterInput = ({ filter, onFilterChange }: FilterInputProps) => {
  return (
    <div className="flex-1">
      <input
        className="solid border-0 focus:border outline-none focus:border-blue-600 bg-white  py-2 px-4 rounded-xl w-full"
        type="text"
        value={filter}
        placeholder="Filter by name or category"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
