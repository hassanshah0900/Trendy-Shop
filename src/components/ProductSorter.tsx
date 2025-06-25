"use client";

import { SortValue, useFilters } from "@/contexts/FilterContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const items: { label: string; value: SortValue }[] = [
  {
    label: "Alphabetical: A-Z",
    value: "alphabetical_asc",
  },
  {
    label: "Alphabetical: Z-A",
    value: "alphabetical_desc",
  },
  {
    label: "Rating: Low to High",
    value: "rating_asc",
  },
  {
    label: "Rating: High to Low",
    value: "rating_desc",
  },
  {
    label: "Price: Low to High",
    value: "price_asc",
  },
  {
    label: "Price: High to Low",
    value: "price_desc",
  },
];

export default function ProductSorter() {
  const { filters, setFilters } = useFilters();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground bg-muted py-1 px-2 rounded-md cursor-pointer"
        >
          {items.find((item) => item.value === filters.sort)?.label ||
            "Sort Products"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={filters.sort}
          onValueChange={(value) =>
            setFilters({ ...filters, sort: value as SortValue })
          }
        >
          {items.map(({ value, label }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
