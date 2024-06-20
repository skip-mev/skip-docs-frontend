import { FC } from "react";
import ResearchLink from "../ResearchLink";

interface PostItemProps {
  title: string;
  url: string;
  date: string;
}

const PostItem: FC<PostItemProps> = ({ title, url, date }) => {
  return (
    <div
      className="bg-[#f3f6f808] p-8 rounded-lg flex gap-4 items-start"
      style={{
        background:
          "linear-gradient(90deg, #5C0C1A1a 50%, #00000000 100%) #f3f6f808",
      }}
    >
      <div className="flex-1">
        <p className="font-bold text-sm">{date}</p>
        <a
          className="font-semibold text-xl hover:underline"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </div>
      <div>
        <a
          className="bg-[#ffffff12] px-4 py-1 rounded-full inline-block"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
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
      </div>
    </div>
  );
};

const BlogSection: FC = () => {
  return (
    <div className="px-4 py-24 space-y-9">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex-1" />
        <div className="flex-1">
          <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
            Recent Research
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <ResearchLink />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PostItem
          title="How to Make Smart Contracts & Modules More Accessible to Cross-Chain Users"
          url="https://ideas.skip.money/t/how-to-make-smart-contracts-modules-more-accessible-to-cross-chain-users/86"
          date="Aug 17 2023"
        />
        <PostItem
          title="How to Give IBC Superpowers"
          url="https://ideas.skip.money/t/how-to-give-ibc-superpowers/81/2"
          date="Jul 6 2023"
        />
        <PostItem
          title="A Formal-ish Definition for Intents"
          url="https://ideas.skip.money/t/a-formal-ish-definition-for-intents/73/5"
          date="May 9 2023"
        />
        <PostItem
          title="x/Builder: The First Sovereign MEV Module for Protocol-Owned Building"
          url="https://ideas.skip.money/t/x-builder-the-first-sovereign-mev-module-for-protocol-owned-building/57/5"
          date="Apr 17 2023"
        />
      </div>
    </div>
  );
};

export default BlogSection;
