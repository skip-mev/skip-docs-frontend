/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Button from "../Button";

const RunAValidatorSection: FC = () => {
  return (
    <div className="space-y-10 px-4 pb-24">
      <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
        Run a validator?
      </p>
      <p className="text-base text-center">
        Join the best teams in Cosmos and sign up for Skip today!
      </p>
      <div className="text-center">
        <Button href="/registration" large>
          Get An API Key
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="flex-1 px-8 py-16 text-center space-y-4 rounded-lg"
          style={{
            background: "#74338A21",
          }}
        >
          <p className="font-bold text-xl">Deploy fast</p>
          <p className="text-sm">
            Skip takes just 5 minutes to set up. Just click the link above and
            we will have you up & running in no time.
          </p>
        </div>
        <div
          className="flex-1 px-8 py-16 text-center space-y-4 rounded-lg"
          style={{
            background:
              "linear-gradient(90deg,#74338A21 0%, #00000000 70%) #f3f6f808",
          }}
        >
          <p className="font-bold text-xl">Work with the best</p>
          <p className="text-sm">
            Skip works hand in hand with dozens of the best validator teams and
            chains to to ship battle-tested solutions that seamlessly integrate
            into your existing infrastructure
          </p>
        </div>
        <div className="flex-1 bg-[#f3f6f808] px-8 py-16 text-center space-y-4 rounded-lg">
          <p className="font-bold text-xl">Reap the rewards</p>
          <p className="text-sm">
            Validators using Skip earn more non-inflationary revenue for
            themselves, their delegators, and the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RunAValidatorSection;
