import { TfiMenu } from "react-icons/tfi";
import Link from "./Link";
import Slider from "./Slider";

export default function MobileNavbarLinks() {
  return (
    <Slider
      className="block md:hidden"
      alignment="left"
      buttonContent={<TfiMenu />}
    >
      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href={"/"}>Shop</Link>
          </li>
          <li>
            <Link href={"/"}>New Arrivals</Link>
          </li>
          <li>
            <Link href={"/"}>Brands</Link>
          </li>
        </ul>
      </nav>
    </Slider>
  );
}
