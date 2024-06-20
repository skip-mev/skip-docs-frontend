/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const TestimonialsSection: FC = () => {
  return (
    <div className="space-y-10 px-4 pb-24">
      <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
        Word on the street
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#f3f6f808] flex-1 p-8 rounded-lg space-y-4 text-center">
          <img
            alt="Tarun Chitra"
            className="mx-auto w-20 h-20 rounded-full object-cover"
            src="/testimonial-1.jpeg"
          />
          <div>
            <p className="font-bold text-xl">Tarun Chitra</p>
            <p>CEO, Gauntlet Network</p>
          </div>
          <p className="text-sm">
            The Skip team has a very unique background that combines academic
            mechanism design research and practical software engineering that
            allows them to improve the efficiency of the Cosmos ecosystem.
          </p>
        </div>
        <div
          className="bg-[#f3f6f808] flex-1 p-8 rounded-lg space-y-4 text-center"
          style={{
            background:
              "linear-gradient(90deg, #00000000 0%,#5C320C21 90%) #f3f6f808",
          }}
        >
          <img
            alt="Zaki Manian"
            className="mx-auto w-20 h-20 rounded-full object-cover"
            src="/testimonial-2.png"
          />
          <div>
            <p className="font-bold text-xl">Zaki Manian</p>
            <p>Founder, Sommelier & Cosmos</p>
          </div>
          <p className="text-sm">
            MEV is the most important problem in the interchain future. Skip is
            creating a path to a fair and efficient on chain markets and
            reliable multichain experiences via their MEV solutions.
          </p>
        </div>
        <div
          className="bg-[#f3f6f808] flex-1 p-8 rounded-lg space-y-4 text-center"
          style={{
            background: "#5C320C21",
          }}
        >
          <img
            alt="Sunny Agrawal"
            className="mx-auto w-20 h-20 rounded-full object-cover"
            src="/testimonial-3.png"
          />
          <div>
            <p className="font-bold text-xl">Sunny Agrawal</p>
            <p>Co-Founder of Osmosis Labs</p>
          </div>
          <p className="text-sm">
            Skip has accelerated Osmosis&apos;s roadmap to recapture healthy MEV
            for our community and protect our users from toxic extraction. And
            we&apos;re excited to continue pioneering sovereign block-building
            protocols with them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
