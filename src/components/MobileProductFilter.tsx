import ProductFilter from "./ProductFilter";
import Slider from "./Slider";
import { TiFilter } from "react-icons/ti";

export default function MobileProductFilter() {
  return (
    <div className="md:hidden">
      <Slider buttonContent={<TiFilter className="text-xl" />} alignment="left">
        <ProductFilter />
      </Slider>
    </div>
  );
}
