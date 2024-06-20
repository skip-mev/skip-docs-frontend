/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const ProductsSection: FC = () => {
  return (
    <div className="space-y-10 px-4 pb-24">
      <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
        Skip is Shaping a new Age of Sovereign Blockchain Infrastructure
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="bg-[#f3f6f808] flex-1 p-8 rounded-lg space-y-4 text-center"
          style={{
            background:
              "linear-gradient(90deg, #00000000 0%, #5C0C1A1a 50%) #f3f6f808",
          }}
        >
          <div className="flex justify-center">
            <div className="bg-[#F3F6F80d] w-14 h-14 p-3 rounded-lg">
              <img src="/coin.png" alt="" className="block w-8" />
            </div>
          </div>
          <p className="font-bold text-xl">
            Slinky
          </p>
          <p className="text-sm">
            An enshrined restaked oracle built for the highest performance DeFi. Used by major chains and perpetuals protocols
            to guarantee per-block prices with millisecond refresh rates.
          </p>
        </div>
        <div
          className="bg-[#f3f6f808] flex-1 p-8 rounded-lg space-y-4 text-center"
          style={{
            background:
              "linear-gradient(90deg, #5C0C1A1a 0%, #00000000 50%) #f3f6f808",
          }}
        >
          <div className="flex justify-center">
            <div className="bg-[#F3F6F80d] w-14 h-14 p-3 rounded-lg">
              <img src="/shovel.png" alt="" className="block w-8" />
            </div>
          </div>
          <p className="font-bold text-xl">The Skip API</p>
          <p className="text-sm">
            A unified REST/RPC service that helps developers create more
            seamless cross-chain experiences for their end users. Allow
            for multi-hop swaps, transfers, and more, all in one-click
            transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
