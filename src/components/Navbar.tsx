import Link from "@/components/Link";
import Input from "./Input";
import NextLink from "next/link";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { FaCartShopping } from "react-icons/fa6";
import ShoppingCart from "./ShoppingCart";

const navlinks = [
  { id: 1, label: "Shop", href: "/shop" },
  { id: 2, label: "New Arrivals", href: "/new-arrivals" },
  { id: 3, label: "Brands", href: "/brands" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border">
      <NextLink
        href={"/"}
        className="capitalize font-integralcf font-bold text-2xl text-primary mr-10"
      >
        Trendy Shop
      </NextLink>
      <nav>
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
      <Input
        className="bg-muted max-w-[400px]"
        icon={<CiSearch />}
        placeholder="Search for Products..."
      />
      <ShoppingCart />
    </div>
  );
}
