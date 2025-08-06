type SortInputProps = {
  sort: string;
  onSortChange: React.Dispatch<React.SetStateAction<string>>;
};

const SortInput = ({ sort, onSortChange }: SortInputProps) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="limit">Sort By:</label>
      <select
        className="py-2 px-4 bg-white rounded-xl outline-none "
        value={sort}
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="asc">Default</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name_asc">Name: A-Z</option>
        <option value="name_desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default SortInput;
