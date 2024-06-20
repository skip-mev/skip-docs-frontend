/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../../components/Button";
import DocsLayout from "../../components/DocsLayout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="px-4">
      <div className="divide-y divide-[#F3F6F8]/20">
        <div className="space-y-6 pb-20">
          <div className="flex gap-5 items-center">
            <h1 className="font-black text-4xl">Start Building With Skip</h1>
          </div>
          <p className="text-lg">Jump right into the docs:</p>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="bg-[#1A1B1C] p-11 pb-16 space-y-3">
              <img
                className="h-10"
                src="/docs-icon-validators.svg"
                alt="Validator"
              />
              <p className="text-lg leading-loose font-black">Skip API</p>
              <p className="flex-1">
                A unified REST/RPC service to create seamless cross-chain experiences.
              </p>
              <p className="font-black text-[#00C5FB] flex-1 pb-6 sm:pb-0">
                <Link href="/products/api">Learn More</Link>
              </p>
              <Button
                className="inline-flex items-center gap-2"
                href="https://api-docs.skip.money"
              >
                <span className="whitespace-nowrap">Docs</span>
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
            <div className="bg-[#1A1B1C] p-11 pb-16 space-y-3">
              <img className="h-10" src="/docs-icon-chains.svg" alt="Chain" />
              <p className="text-lg leading-loose font-black">Slinky</p>
              <p className="flex-1">
                An enshrined, restaked oracle built for the highest performance DeFi.
              </p>
              <p className="font-black text-[#00C5FB] flex-1 pb-6 sm:pb-0">
                <Link href="/products/slinky">Learn More</Link>
              </p>
              <Button
                className="inline-flex items-center gap-1"
                href="https://docs.skip.money/slinky/overview"
              >
                <span className="whitespace-nowrap">Docs</span>
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
            <div className="bg-[#1A1B1C] p-11 pb-16 space-y-3">
              <img
                className="h-10"
                src="/docs-icon-searchers.svg"
                alt="Open Source"
              />
              <p className="text-lg leading-loose font-black">Open Source</p>
              
              <p className="flex-1">
                Our sequencing & MEV work including the BlockSDK, ProtoRev, and dashboards.
              </p>
              <p className="font-black text-[#00C5FB] flex-1 pb-6 sm:pb-0">
                <Link href="/products/opensource">Learn More</Link>
              </p>
              <Button
                className="inline-flex items-center gap-2"
                href="https://docs.skip.money/blocksdk/overview"
              >
                <span className="whitespace-nowrap">Docs</span>
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
        <div className="py-20 space-y-6">
          <h2 className="font-bold text-3xl">Need help?</h2>
          <div className="flex gap-16">
            <div className="space-y-2">
              <p className="font-medium">Resources</p>
              <p>
                <a
                  className="text-[#6398FF] text-lg font-medium hover:underline"
                  href="https://docs.skip.money/about/faq"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frequently asked questions
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Community</p>
              <p>
                <a
                  className="text-[#6398FF] text-lg font-medium hover:underline inline-flex items-center gap-1"
                  href="https://discord.gg/pFFErB7csy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Discord</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default Page;
