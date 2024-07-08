/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../components/Button";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="px-4">
      <div className="divide-y divide-[#F3F6F8]/20">
        <div className="space-y-6 pb-20 ">
          <div className="flex gap-5 mb-16 mt-16 items-center">
            <h1 className="font-bold text-7xl font-display tracking-tight">Start Building with Skip</h1>
          </div>
          <div className="sm:grid-cols-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
            <Link href="/skip-api">
              <div className="bg-[#FFC900] p-11 pb-16 space-y-3 hover:bg-[#FFD537] cursor-pointer transform hover:scale-105 transition duration-200">
                <h2 className="text-2xl font-light text-black">Skip:Go</h2>
                <img
                  className="h-100 my-16 mx-auto"
                  src="/go-illustration.svg"
                  alt="API"
                />
                <p className="flex-1 text-2xl font-light text-black">
                A sovereign interop platform that helps your users go anywhere and do anything. Makes cross-chain simple for developers and users.
                </p>
              </div> 
            </Link>
            <Link href="/slinky">
              <div className="bg-[#0061FF] p-11 pb-16 space-y-3 hover:bg-[#0041AB] cursor-pointer transform hover:scale-105 transition duration-200">
                <h2 className="text-2xl font-light">Skip:Connect</h2>
                <img className="h-100 my-16 mx-auto" src="/connect-illustration.svg" alt="Oracle" />
                <p className="flex-1 text-2xl font-light">
                A sovereign data platform with the speed, power, and security of your chain. Built for high-performance applications.
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
