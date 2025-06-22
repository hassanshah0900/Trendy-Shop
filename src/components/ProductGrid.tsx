import Link from "next/link";
import { ProductType } from "../types/product.type";
import Product from "./Product";

interface Props {
  products: ProductType[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-10">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
}
