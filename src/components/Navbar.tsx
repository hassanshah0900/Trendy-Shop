import DummyLink from "@/components/DummyLink";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
import MobileNavbarLinks from "./MobileNavbarLinks";
import Searchbar from "./Searchbar";

const navlinks = [
  { id: 1, label: "Shop", href: "/shop" },
  { id: 2, label: "New Arrivals", href: "/new-arrivals" },
  { id: 3, label: "Brands", href: "/brands" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-start gap-5 py-3 relative">
      <Link
        href={"/"}
        className="capitalize font-integralcf font-bold text-xl leading-none md:text-2xl text-primary"
      >
        Trendy Shop
      </Link>
      <div className="flex justify-end md:justify-between items-center w-full">
        <DesktopNavbarLinks />
        <Searchbar />
        <MobileNavbarLinks />
        <Button variant="secondary" display="iconRound">
          <FaCartShopping />
        </Button>
      </div>
    </div>
  );
}

function DesktopNavbarLinks() {
  return (
    <nav className="hidden md:block">
      <menu className="flex gap-4">
        {navlinks.map((link) => (
          <li key={link.id}>
            <DummyLink className="whitespace-nowrap">{link.label}</DummyLink>
          </li>
        ))}
      </menu>
    </nav>
  );
}
