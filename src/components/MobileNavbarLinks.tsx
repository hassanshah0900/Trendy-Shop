import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import Slider from "./Slider";
import { TfiMenu } from "react-icons/tfi";
import Link from "./Link";

export default function MobileNavbarLinks() {
  return (
    <Slider className="block md:hidden" alignment="left" button={<TfiMenu />}>
      <nav>
        <ul className="flex flex-col gap-3 mt-5">
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
