import { TfiMenu } from "react-icons/tfi";
import DummyLink from "./DummyLink";
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
            <DummyLink>Shop</DummyLink>
          </li>
          <li>
            <DummyLink>New Arrivals</DummyLink>
          </li>
          <li>
            <DummyLink>Brands</DummyLink>
          </li>
        </ul>
      </nav>
    </Slider>
  );
}
