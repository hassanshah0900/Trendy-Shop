"use client";

import { PriceRange } from "@/components/FilterPriceRange";
import { createContext, ReactNode, useContext, useState } from "react";

export type SortValue =
  | "rating_asc"
  | "rating_desc"
  | "price_asc"
  | "price_desc"
  | "alphabetical_asc"
  | "alphabetical_desc";

export interface Filters {
  categories: string[];
  price: PriceRange;
  sort: SortValue;
  ratings: string[];
  search: string;
}

interface FilterContextType {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    sort: "alphabetical_asc",
    categories: [],
    price: [0, 1000],
    ratings: [],
    search: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
