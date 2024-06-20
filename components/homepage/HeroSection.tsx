import Link from "next/link";
import { FC } from "react";
import HomepageAnimation from "../HomepageAnimation";

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-28 px-4 pb-24 gap-8">
      <div className="flex-1">
        <div className="max-w-2xl mx-auto">
          <p className="text-5xl lg:text-5xl leading-tight text-center lg:text-left font-extrabold mb-8">
            Best-In-Class Infrastructure for Sovereign Blockchains
          </p>
          <p className="text-center lg:text-left text-lg leading-tight mb-8">
            Skip helps sovereign blockchain protocols supercharge their user experience, interoperability, and
            value capture with its vertically integrated product suite.
          </p>
          <div className="flex flex-col items-center justify-center md:justify-start gap-5 md:flex-row">
            <Link
              href="/products"
              className="text-white visited:text-white bg-[#ffffff0d] border border-solid border-[#ffffff12] inline-flex items-center no-underline p-1 pl-4 gap-4 rounded-full"
            >
              <span className="leading-none">View Products</span>
              <div className="bg-[#ffffff12] px-3 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 block"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <a
              href="https://ibc.fun/"
              className="text-white visited:text-white bg-[#ffffff0d] border border-solid border-[#ffffff12] inline-flex items-center no-underline p-1 pl-4 gap-4 rounded-full"
              target="_blank"
              rel="noreferrer"
            >
              <span className="leading-none">Have Some Fun!</span>
              <div className="bg-[#ffffff12] px-3 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 block"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
