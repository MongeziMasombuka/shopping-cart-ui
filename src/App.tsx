import FilterInput from "./components/FilterInput";
import Header from "./components/Header";
import LimitSelector from "./components/LimitSelector";
import SortSelector from "./components/SortSelector";
import ProductList from "./components/ProductList";
import { useProducts } from "./context/ProductContext";

const App = () => {
  const { sort, setSort, limit, setLimit, filter, setFilter } = useProducts();
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold ">Product Catalog</h1>
        <div className="flex justify-between gap-4 items-center my-6 flex-wrap">
          <FilterInput filter={filter} onFilterChange={setFilter} />
          <LimitSelector limit={limit} onLimitChange={setLimit} />
          <SortSelector sort={sort} onSortChange={setSort} />
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default App;
