import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Button from "./Button";
import Container from "./Container";
import DummyLink from "./DummyLink";

const companyLinks = [
  { id: 1, label: "About" },
  { id: 2, label: "Features" },
  { id: 3, label: "Works" },
  { id: 4, label: "Career" },
];

const supportLinks = [
  { id: 1, label: "Customer Support" },
  { id: 2, label: "Delivery Details" },
  { id: 3, label: "Terms & Conditions" },
  { id: 4, label: "Privacy Policy" },
];

const faqLinks = [
  { id: 1, label: "Account" },
  { id: 2, label: "Manage Deliveries" },
  { id: 3, label: "Orders" },
  { id: 4, label: "Payments" },
];

const resourcesLinks = [
  { id: 1, label: "Free eBooks" },
  { id: 2, label: "Development Tutorial" },
  { id: 3, label: "How to - Blogs" },
  { id: 4, label: "Youtube Playlist" },
];

const socialLinks = [
  { id: 1, icon: <FaFacebookF /> },
  { id: 2, icon: <IoLogoTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaTiktok /> },
];

export default function Footer() {
  return (
    <footer className="bg-muted pt-32 sm:pt-28 pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-[1.5fr_1fr] md:grid-cols-[1.5fr_repeat(4,1fr)] gap-x-10 md:gap-x-4">
          <div>
            <Link
              href={"/"}
              className="text-2xl font-bold text-primary font-integralcf inline-block mb-3 sm:mb-4  md:mb-5"
            >
              Trendy Shop
            </Link>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex justify-start items-center gap-2 mt-8">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <Button variant="outline" display="iconRound">
                    {link.icon}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-muted-foreground text-xl mb-3 sm:mb-4 md:mb-5 font-medium">
              Company
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <DummyLink>{link.label}</DummyLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-muted-foreground text-xl mb-3 sm:mb-4 md:mb-5 font-medium">
              Help
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <DummyLink>{link.label}</DummyLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-muted-foreground text-xl mb-3 sm:mb-4 md:mb-5 font-medium">
              faq
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {faqLinks.map((link) => (
                <li key={link.id}>
                  <DummyLink>{link.label}</DummyLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-muted-foreground text-xl mb-3 sm:mb-4 md:mb-5 font-medium">
              Resources
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {resourcesLinks.map((link) => (
                <li key={link.id}>
                  <DummyLink>{link.label}</DummyLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
