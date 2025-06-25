import Image from "next/image";
import StarRating from "./StarRating";
import { ProductType } from "./ProductGrid";

interface Props {
  product: ProductType;
}
export default function Product({
  product: { title, price, rating, image },
}: Props) {
  return (
    <div>
      <div className="w-full aspect-square relative rounded-2xl overflow-hidden bg-product-background mb-4">
        <Image
          src={image}
          fill
          className="object-center object-contain p-5"
          alt=""
          sizes="(max-width: 560px) 100vw, (max-width: 768px): 50vw, (max-width: 1100): 37.5vw, 25vw"
        />
      </div>
      <div className="space-y-1">
        <h2 className="font-satoshi font-bold text-lg md:text-xl text-primary">
          {title}
        </h2>
        <div className="flex justify-start items-center gap-4">
          <StarRating rating={rating.rate} starSize={16} />
          <span>
            <span className="text-primary">{rating.rate}</span>/5{" "}
            {`(${rating.count})`}
          </span>
        </div>
        <div className="font-satoshi font-bold text-primary text-lg md:text-xl">
          ${price}
        </div>
      </div>
    </div>
  );
}
