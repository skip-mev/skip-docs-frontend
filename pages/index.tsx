/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../components/Button";
import type { NextPageWithLayout } from "_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="px-4">
      <div className="divide-y divide-[#F3F6F8]/20">
        <div className="space-y-6 pb-20">
          <div className="flex gap-5 items-center">
            <h1 className="font-black text-4xl">Jump into the Docs</h1>
          </div>
          <p className="text-lg">Start Building with Skip</p>
          <div className="grid grid-cols-2 xl:grid-cols-2 gap-5">
            <Link href="/skip-api">
              <div className="bg-[#1A1B1C] p-11 pb-16 space-y-3 hover:bg-[#292A2B] cursor-pointer transform hover:scale-105 transition duration-200">
                <img
                  className="h-10"
                  src="/docs-icon-validators.svg"
                  alt="Validator"
                />
                <p className="text-lg leading-loose font-black">Skip API</p>
                <p className="flex-1">
                A sovereign interop platform that helps your users go anywhere and do anything. Makes cross-chain simple for developers and users.
                </p>
                <p className="font-black text-[#00C5FB] flex-1 pb-6 sm:pb-0">
                </p>
              </div> 
            </Link>
            <Link href="/slinky">
              <div className="bg-[#1A1B1C] p-11 pb-16 space-y-3 hover:bg-[#292A2B] cursor-pointer transform hover:scale-105 transition duration-200">
                <img className="h-10" src="/docs-icon-chains.svg" alt="Chain" />
                <p className="text-lg leading-loose font-black">Slinky</p>
                <p className="flex-1">
                A  sovereign data platform with the speed, power, and security of your chain. Built for high-performance applications.
                </p>
                <p className="font-black text-[#00C5FB] flex-1 pb-6 sm:pb-0">
                </p>  
              </div> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
