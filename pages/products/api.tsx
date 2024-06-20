import Image from "next/image";
import Button from "../../components/Button";
import DocsLayout from "../../components/DocsLayout";
import type { NextPageWithLayout } from "../_app";
// this creates the page with layout
const Page: NextPageWithLayout = () => {
  return (
    <div className="px-4 space-y-14">
      <div className="space-y-6">
        <div className="flex gap-5 items-center">
          <Image src="/docs-icon-validators.svg" alt="" width={66} height={40} />
          <h1 className="font-black text-4xl">The Skip API</h1>
        </div>
        <p>
          Skip API is a unified REST/RPC service that helps developers create more seamless cross-chain experiences for their end users, across a variety of bridges.
        </p>
        <Button large href="https://api-docs.skip.money" externalLink>
          Integrate the Skip API
        </Button>
      </div>
      <div>
        <h2 className="font-black text-xl pb-6">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
          <div className="bg-[#1A1B1C] p-11 flex flex-col">
            <p className="font-black text-[#F13E92] text-xl pb-6">
              Cross-chain Transfers
            </p>
            <p className="text-lg leading-loose font-medium pb-6 flex-1">
              Skip drastically simplifies & improves the user experience of
              transferring any asset from one chain to another.
            </p>
          </div>
          <div className="bg-[#1A1B1C] p-11 flex flex-col">
            <p className="font-black text-[#F13E92] text-xl pb-6">
              Cross-chain Swaps
            </p>
            <p className="text-lg leading-loose font-medium pb-6 flex-1">
              Skip has figured out the most efficient, affordable way to
              securely swap tokens between chains, across any bridge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default Page;
