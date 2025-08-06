import { createContext, useState, useEffect, useContext } from "react";
import type { Product } from "../lib/type";
const apiUrl = import.meta.env.VITE_APP_URL;

type ProductProviderProps = {
  children: React.ReactNode;
};
type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: string | null;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  // filteredProducts: Product[];
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const ProductContext = createContext<ProductContextType>(undefined as never);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${apiUrl}/api/products?limit=${limit}&sort=${sort}&search=${filter}`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
        //console.log(data.products);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [limit, sort, filter]);

  // const filteredProducts = products.filter((product) => {
  //   return (
  //     product.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     product.category.toLowerCase().includes(filter.toLowerCase())
  //   );
  // });
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        limit,
        setLimit,
        filter,
        setFilter,
        sort,
        setSort,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
