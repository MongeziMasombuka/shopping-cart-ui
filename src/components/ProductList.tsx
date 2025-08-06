import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

const ProductList = () => {
  const { loading, error, products } = useProducts();
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No matching products</p>
      )} */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="error">{error}</div>
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No matching products</p>
      )}
    </div>
  );
};

export default ProductList;
