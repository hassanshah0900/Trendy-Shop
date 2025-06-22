import { Filters } from "@/app/shop/page";
import { SortValue } from "@/components/ProductSorter";
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

export function getPriceRange(products: ProductType[]) {
  const filteredProducts = sortProducts(products, "price_asc");
  return {
    low: filteredProducts[0].price,
    high: filteredProducts[filteredProducts.length - 1].price,
  };
}

export function filterProducts(products: ProductType[], filters: Filters) {
  let filteredProducts: ProductType[] = [];
  if (filters.categories.length === 0) filteredProducts = products;
  else
    filteredProducts = filterProductsByCategoryList(
      products,
      filters.categories
    );

  if (filters.ratings.length === 0) filteredProducts = filteredProducts;
  else
    filteredProducts = filterProductsByStars(filteredProducts, filters.ratings);

  sortProducts(products, filters.sort);

  return filteredProducts;
}

function filterProductsByCategoryList(
  products: ProductType[],
  categories: string[]
) {
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
  return products.filter((product) =>
    stars.includes(Math.floor(product.rating.rate) + " star")
  );
}
