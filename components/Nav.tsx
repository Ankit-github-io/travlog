"use client";
import Link from "next/link";
// import { useRouter } from "next/router";

const Nav = () => {
  //   const router = useRouter();
  const router = { pathname: "" };

  return (
    <nav className="nav flex lg:gap-4 items-center sm:gap-2 sm:basis-6/12 md:basis-4/12 sm:justify-center md:gap-3">
      <Link href="/" className={router.pathname === "/" ? "activeNavLink" : ""}>
        Home
      </Link>
      <Link
        href="/discover"
        className={router.pathname === "/discover" ? "activeNavLink" : ""}
      >
        Discover
      </Link>
      <Link
        href="/special-deal"
        className={router.pathname === "/special-deal" ? "activeNavLink" : ""}
      >
        Special Deal
      </Link>
      <Link
        href="/contact"
        className={router.pathname === "/contact" ? "activeNavLink" : ""}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
