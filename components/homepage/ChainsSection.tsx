/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const CHAINS = [
  {
    name: "Osmosis",
    imageURL: "osmosis-logo.png",
  },
  {
    name: "dYdX",
    imageURL: "dydx-logo.png",
  },
  {
    name: "Neutron",
    imageURL: "neutron-logo.png",
  },
  {
    name: "Berachain",
    imageURL: "berachain-logo.png",
  },
  {
    name: "Injective",
    imageURL: "injective-logo.png",
  },
  {
    name: "Evmos",
    imageURL: "evmos-logo.png",
  },
  {
    name: "Terra 2",
    imageURL: "terra-2-logo.png",
  },
  {
    name: "Juno",
    imageURL: "juno-logo.png",
  },
];

const ChainsSection: FC = () => {
    return (
      <div className="space-y-20 pb-24">
        <div className="px-4">
          <p className="text-[#F3F6F8]/95 text-2xl text-center mb-16">
            Trusted by the top chains in Cosmos
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
            {CHAINS.map((chain) => (
              <div
                className="flex flex-col justify-center items-center gap-3 aspect-square"
                key={chain.name}
              >
                <img
                  alt={`${chain.name} logo`}
                  className="w-24 sm:w-16 h-24 sm:h-16"
                  src={chain.imageURL}
                />
                <p className="text-xl">{chain.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ChainsSection;