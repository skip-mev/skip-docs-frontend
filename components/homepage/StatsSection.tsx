import { FC } from "react";

const StatsSection: FC = () => {
  return (
    <div className="px-4 pb-24">
      <div className="bg-[#f3f6f808] flex-1 p-8 py-14 rounded-lg space-y-4 text-center">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-6xl font-bold">30</p>
            <p className="text-base uppercase">Chains</p>
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-6xl font-bold">$300m</p>
            <p className="text-base uppercase">Total Volume</p>
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-6xl font-bold">$2m+</p>
            <p className="text-base uppercase">Made for Protocols</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
