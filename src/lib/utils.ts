import { PriceRange } from "@/components/FilterPriceRange";
import { Filters, SortValue } from "@/contexts/FilterContext";
import { ProductType } from "@/types/product.type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoriesFromProducts(products: ProductType[]) {
  const result = new Set<string>();
  for (let product of products) result.add(product.category);

  return [...result];
}

export function filterProducts(products: ProductType[], filters: Filters) {
  let filteredProducts = products;

  filteredProducts = filterProductsBySearchTerm(
    filteredProducts,
    filters.search
  );

  filteredProducts = filterProductsByPriceRange(
    filteredProducts,
    filters.price
  );

  filteredProducts = filterProductsByCategoryList(
    filteredProducts,
    filters.categories
  );

  filteredProducts = filterProductsByStars(filteredProducts, filters.ratings);

  filteredProducts = sortProducts(filteredProducts, filters.sort);

  return filteredProducts;
}

function filterProductsByCategoryList(
  products: ProductType[],
  categories: string[]
) {
  if (categories.length === 0) return products;
  return products.filter((product) => categories.includes(product.category));
}

function sortProducts(products: ProductType[], sortValue: SortValue) {
  return products.sort((product1, product2) => {
    let result: number;
    switch (sortValue) {
      case "alphabetical_asc":
        result = product1.title < product2.title ? -1 : 1;
        break;
      case "alphabetical_desc":
        result = product1.title > product2.title ? -1 : 1;
        break;
      case "price_asc":
        result = product1.price - product2.price;
        break;
      case "price_desc":
        result = product2.price - product1.price;
        break;
      case "rating_asc":
        result = product1.rating.rate - product2.rating.rate;
        break;
      case "rating_desc":
        result = product2.rating.rate - product1.rating.rate;
        break;
    }
    return result;
  });
}

function filterProductsByStars(products: ProductType[], stars: string[]) {
  if (stars.length === 0) return products;
  return products.filter((product) =>
    stars.includes(Math.floor(product.rating.rate) + " star")
  );
}

function filterProductsByPriceRange(
  products: ProductType[],
  priceRange: PriceRange
) {
  return products.filter(
    ({ price }) => price >= priceRange[0] && price <= priceRange[1]
  );
}

function filterProductsBySearchTerm(
  products: ProductType[],
  searchTerm: string
) {
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
