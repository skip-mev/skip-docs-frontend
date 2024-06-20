import Image from "next/image";
import Button from "../../components/Button";
import DocsLayout from "../../components/DocsLayout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="px-4 space-y-16">
      <div className="space-y-6">
        <div className="flex gap-5 items-center">
          <Image src="/docs-icon-chains.svg" alt="" width={51} height={55} />
          <h1 className="font-black text-4xl">Slinky</h1>
        </div>
        <p>
        Slinky is a revolutionary enshrined oracle built for the highest performance DeFi.
        It leverages your own chain security to provide guaranteed per-block price updates with millisecond refresh rates.
        <br />
        <br />
        Slinky comes with a full Skip operation team, which keeps 24-hour SLAs to add new currency pairs and keep markets healthy.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div
            className="p-0.5 rounded-xl"
            style={{
              background:
                "linear-gradient(110.98deg, #00C5FB 0%, #FFC72A 100%)",
            }}
          >
            <div className="bg-[#1A1B1C] p-11 flex flex-col rounded-xl h-full">
              <div className="sm:flex items-center pb-6">
                <p className="font-black text-[#00C5FB] text-xl flex-1 pb-6 sm:pb-0">
                  Slinky
                </p>
                <div className="bg-[#00C5FB] text-[#151617] text-sm font-black px-4 py-2 inline-block">
                  Latest Release
                </div>
              </div>
              <p className="text-lg leading-loose font-medium pb-6 flex-1">
                Integrate Slinky by implementing the associated sidecar, modules, and proposal handlers.
                Requires CosmosSDK 0.50 and CometBFT 0.38 or higher.
              </p>
              <div>
                <Button
                  className="inline-flex items-center gap-2"
                  large
                  externalLink
                  href="https://docs.skip.money/slinky/overview"
                >
                  <span>Integrate Slinky</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91666 7H11.0833"
                      stroke="#1F2021"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 2.91666L11.0833 6.99999L7 11.0833"
                      stroke="#1F2021"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

Page.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default Page;
