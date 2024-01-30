import Link from "next/link";
import { ReactNode, useState } from "react";
type LinkP = {
  href: any;
  children: ReactNode;
};
const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-black font-bold text-xl" href="/">
          Your Logo
        </Link>

        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4 space-y-2">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: LinkP) => (
  <Link href={href} className="text-black hover:text-gray-300">
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }: LinkP) => (
  <Link className="text-black block" href={href}>
    {children}
  </Link>
);

export default NavBar;
