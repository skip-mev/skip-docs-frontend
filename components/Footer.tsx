/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
// import ResearchLink from "./ResearchLink";

const Footer: FC = () => {
  return (
    <div className="space-y-6 px-4">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        
        <div className="flex-1">
          <p className="text-center text-[#F3F6F8] font-light text-2xl">
            Join our community
          </p>
        </div>

      </div>
      <footer className="bg-[#F3F6F8] bg-opacity-[10%]  py-8 flex justify-center items-center">
        <div className="flex items-center gap-6">
          <a
            className="inline-flex items-center justify-center opacity-70 hover:opacity-100 w-7 h-7"
            href="https://github.com/skip-mev"
            target="_blank"
            rel="noreferrer"
          >
            <img className="block" src="github-icon.png" alt="" />
          </a>
          <a
            className="inline-flex items-center justify-center opacity-70 hover:opacity-100 w-7 h-7"
            href="https://discord.gg/hFeHVAE26P"
            target="_blank"
            rel="noreferrer"
          >
            <img className="block" src="discord-icon.png" alt="" />
          </a>
          <a
            className="inline-flex items-center justify-center opacity-70 hover:opacity-100 w-7 h-7"
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
