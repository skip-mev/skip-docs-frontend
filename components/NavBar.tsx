import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import skipLogo from "../public/skip-logo.svg";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const NavBar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width >= 768 && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [windowSize, mobileMenuOpen]);

  return (
    <Fragment>
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <nav className="bg-[#121213] relative">
        <div className="mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/">
            <Image className="w-24 h-[40px]" src={skipLogo} alt="Skip logo" />
          </Link>
          <div className="items-center gap-2 hidden md:flex">
            <Button href="/products" type="ghost">
              Products
            </Button>
            <Button href="https://ideas.skip.money" externalLink type="ghost">
              Research
            </Button>
            <Button
              className="mr-2"
              href="https://jobs.skip.money"
              externalLink
              type="ghost"
            >
              Jobs
            </Button>
          </div>
          <button
            className="text-white bg-transparent border-none cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 block"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
