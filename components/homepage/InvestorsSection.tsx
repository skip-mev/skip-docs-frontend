/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface InvestorProps {
  name: string;
  imageURL: string;
}

const Investor: FC<InvestorProps> = ({ imageURL, name }) => {
  return (
    <div className="text-center w-44 flex-shrink-0 space-y-4">
      <div className="flex items-center justify-center h-20">
        <img alt="Bain Crypto Ventures" className="w-16" src={imageURL} />
      </div>
      <div>
        <p className="text-xl leading-none font-semibold">{name}</p>
      </div>
    </div>
  );
};

const InvestorsSection: FC = () => {
  return (
    <div className="space-y-10 px-4 pt-24">
      <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
        Backed by the Best
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Investor name="Bain Crypto Ventures" imageURL="bcv-logo.png" />
        <Investor name="PlaceholderVC" imageURL="placeholder-logo.png" />
        <Investor name="Reciprocal Ventures" imageURL="reciprocal-logo.png" />
        <Investor name="Spartan" imageURL="spartan-logo.png" />
        <Investor name="Jump Crypto" imageURL="jump-crypto.png" />
        <Investor name="Robot Ventures" imageURL="robot-ventures.png" />
        <Investor name="Monoceros" imageURL="monoceros-logo.png" />
        <Investor name="Informal Systems" imageURL="informal-systems.png" />
        <Investor name="Lightspeed Faction" imageURL="lightspeed-faction.png" />
        <Investor name="Zaki Manian" imageURL="zaki.png" />
        <Investor name="Nick White" imageURL="nick-white.png" />
        <Investor name="Sreeram Kannan" imageURL="sreeram.jpeg" />
      </div>
    </div>
  );
};

export default InvestorsSection;
