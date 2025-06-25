"use client";

import { Filters, useFilters } from "@/contexts/FilterContext";
import Button from "./Button";
import FilterMultiSelect from "./FilterMultiSelect";
import FilterPriceRange from "./FilterPriceRange";
import Separator from "./Separator";
import { useState } from "react";

interface Props {
  categories: string[];
}
export default function ProductFilter({ categories }: Props) {
  const { filters, setFilters } = useFilters();
  const [placeholderFilters, setPlaceholderFilters] =
    useState<Filters>(filters);

  return (
    <aside className="border-border border rounded-2xl p-4 bg-secondary">
      <div className="font-bold text-xl md:text-2xl text-primary mb-6">
        Filters
      </div>
      <Separator />
      <div className="py-3 md:py-4">
        <FilterPriceRange
          priceRange={[...placeholderFilters.price]}
          onPriceChange={(priceRange) => {
            setPlaceholderFilters({
              ...placeholderFilters,
              price: priceRange,
            });
          }}
        />
      </div>
      <Separator />
      <div className="py-3 md:py-4">
        <FilterMultiSelect
          options={categories}
          selectedOptions={[...placeholderFilters.categories]}
          onChange={(selectedOptions) =>
            setPlaceholderFilters({
              ...placeholderFilters,
              categories: selectedOptions,
            })
          }
          title="Category"
          open
        />
      </div>
      <Separator />
      <div className="py-3 md:py-4">
        <FilterMultiSelect
          options={["1 star", "2 star", "3 star", "4 star", "5 star"]}
          selectedOptions={[...placeholderFilters.ratings]}
          onChange={(selectedOptions) =>
            setPlaceholderFilters({
              ...placeholderFilters,
              ratings: selectedOptions,
            })
          }
          title="Rating"
          open
        />
      </div>
      <Separator />
      <Button
        type="button"
        className="my-4"
        variant="primary"
        display="block"
        onClick={() =>
          setFilters({
            ...placeholderFilters,
            sort: filters.sort,
            search: filters.search,
          })
        }
      >
        Apply
      </Button>
    </aside>
  );
}
