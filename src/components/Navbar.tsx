import Link from "@/components/Link";
import NextLink from "next/link";
import MobileNavbarLinks from "./MobileNavbarLinks";
import Searchbar from "./Searchbar";
import ShoppingCart from "./ShoppingCart";

const navlinks = [
  { id: 1, label: "Shop", href: "/shop" },
  { id: 2, label: "New Arrivals", href: "/new-arrivals" },
  { id: 3, label: "Brands", href: "/brands" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-start gap-5 py-3 relative">
      <NextLink
        href={"/"}
        className="capitalize font-integralcf font-bold text-xl leading-none md:text-2xl text-primary"
      >
        Trendy Shop
      </NextLink>
      <div className="flex justify-end md:justify-between items-center w-full">
        <DesktopNavbarLinks />
        <Searchbar />
        <MobileNavbarLinks />
        <ShoppingCart />
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
            <Link className="whitespace-nowrap" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
