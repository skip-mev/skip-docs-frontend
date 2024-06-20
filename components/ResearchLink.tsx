import { FC } from "react";

const ResearchLink: FC = () => {
  return (
    <a
      href="https://ideas.skip.money"
      className="text-white visited:text-white bg-[#ffffff0d] border border-solid border-[#ffffff12] inline-flex items-center no-underline p-1 pl-4 gap-4 rounded-full"
      target="_blank"
      rel="noreferrer"
    >
      <span className="leading-none">Check out our Research Page</span>
      <div className="bg-[#ffffff12] px-3 py-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 block"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
};

export default ResearchLink;
