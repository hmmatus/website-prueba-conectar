import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { ReactNode, useState } from "react";
import MainButton from "../buttons/MainButton/MainButton";
import { logOut } from "@/redux/slices/auth";
import { Colors } from "@/styles/color";
type LinkP = {
  href: any;
  children: ReactNode;
};
const NavBar = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4" style={{backgroundColor: Colors.navbar}}>
      <div className={`container mx-auto flex justify-between items-center`}>
        <Link className="text-white font-bold text-2xl" href="/">
          Your Logo
        </Link>

        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <NavLink href="/home">Home</NavLink>
              <button className="text-white text-lg" onClick={() => dispatch(logOut())}>Logout</button>
            </>
          ) : (
            <>
              <NavLink href="/login">Login</NavLink>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-lg focus:outline-none pr-4"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col md:hidden absolute top-16 right-4 bg-gray-800 p-4 space-y-2" style={{backgroundColor: Colors.navbar}}>
            {isLoggedIn ? (
              <>
                <MobileNavLink href="/home">Home</MobileNavLink>
                <button className="text-white text-lg" onClick={() => dispatch(logOut())}>Logout</button>
              </>
            ) : (
              <>
                <MobileNavLink href="/login">Login</MobileNavLink>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: LinkP) => (
  <Link href={href} className="text-white text-lg hover:text-gray-300">
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }: LinkP) => (
  <Link className="text-white text-lg block" href={href}>
    {children}
  </Link>
);

export default NavBar;
