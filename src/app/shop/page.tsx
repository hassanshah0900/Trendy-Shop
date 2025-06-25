import Container from "@/components/Container";
import MobileProductFilter from "@/components/MobileProductFilter";
import ProductFilter from "@/components/ProductFilter";
import ProductGrid from "@/components/ProductGrid";
import ProductSorter from "@/components/ProductSorter";

export default function ShopPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-5 my-10 items-start">
        <div className="hidden md:block">
          <ProductFilter categories={[]} />
        </div>
        <div>
          <div className="flex justify-between mb-5">
            <h1 className="text-foreground text-2xl sm:text-3xl font-bold font-integralcf">
              Shop
            </h1>
            <div className="flex md:justify-between justify-end gap-2">
              <MobileProductFilter categories={[]} />
              <ProductSorter />
            </div>
          </div>
          <ProductGrid />
        </div>
      </div>
    </Container>
  );
}
