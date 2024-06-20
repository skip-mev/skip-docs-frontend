/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import ResearchLink from "./ResearchLink";

const Footer: FC = () => {
  return (
    <div className="space-y-10 px-4">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex-1" />
        <div className="flex-1">
          <p className="text-center text-[#F3F6F8] font-semibold text-2xl">
            Get in touch
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <ResearchLink />
        </div>
      </div>
      <footer className="bg-[#F3F6F8] bg-opacity-[3%] rounded-lg py-9 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <a
            className="inline-flex items-center justify-center rounded-full bg-opacity-5 bg-white w-9 h-8"
            href="https://github.com/skip-mev"
            target="_blank"
            rel="noreferrer"
          >
            <img className="block" src="github-icon.png" alt="" />
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-opacity-5 bg-white w-9 h-8"
            href="https://discord.gg/hFeHVAE26P"
            target="_blank"
            rel="noreferrer"
          >
            <img className="block" src="discord-icon.png" alt="" />
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-opacity-5 bg-white w-9 h-8"
            href="https://twitter.com/skipprotocol"
            target="_blank"
            rel="noreferrer"
          >
            <img className="block" src="twitter-icon.png" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
