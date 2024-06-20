/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const WhatSetsUsApartSection: FC = () => {
  return (
    <div className="px-4 pb-24">
      <p className="text-center text-[#F3F6F8] font-semibold text-2xl mb-12">
        What sets us apart
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#f3f6f808] flex-1 p-6 pb-12 rounded-lg space-y-4">
          <img src="/heart.svg" alt="" className="block w-8" />
          <p className="font-bold text-xl">Enrich network stakeholders</p>
          <p className="text-sm">
            We build software that allows chains, validators, protocols, and
            users to capture MEV and decide how the profits are distributed. We
            believe in an interchain future where MEV strengthens the bonds
            between all network stakeholders, and is controlled by on-chain
            governance
          </p>
        </div>
        <div className="bg-[#f3f6f808] flex-1 p-6 pb-12 rounded-lg space-y-4">
          <img src="/search.png" alt="" className="block w-8" />
          <p className="font-bold text-xl">Harness competition among traders</p>
          <p className="text-sm">
            Skip leverages an open network of traders (&quot;searchers&quot;)
            who find profitable opportunities on-chain and compete in a fair
            auction to capture them. Proceeds of the auction are distributed
            back to network stakeholders
          </p>
        </div>
        <div className="bg-[#f3f6f808] flex-1 p-6 pb-12 rounded-lg space-y-4">
          <img src="/star.png" alt="" className="block w-8" />
          <p className="font-bold text-xl">
            Improve on-chain user <br /> experience
          </p>
          <p className="text-sm">
            Skip can eliminate forms of MEV that are toxic to users, such as
            sandwiching and spam, enabling higher rewards for end users on their
            favorite chains, and improving their experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApartSection;
