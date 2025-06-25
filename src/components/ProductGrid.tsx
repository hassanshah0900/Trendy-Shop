"use client";

import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import { useFilters } from "@/contexts/FilterContext";
import { filterProducts } from "@/lib/utils";
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export default function ProductGrid() {
  const { filters } = useFilters();
  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("An error has occured.");
      }
      return await res.json();
    },
  });

  if (isLoading)
    return (
      <div className="w-full mt-40 flex justify-center items-center">
        <div className="animate-spin w-10 h-10 border-2 border-r-border rounded-full"></div>
      </div>
    );
  if (isError) return <div>{error.message}</div>;

  const filteredProducts = filterProducts(products || [], filters);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-10">
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p className="text-xl">No Products found</p>
      )}
    </div>
  );
}
