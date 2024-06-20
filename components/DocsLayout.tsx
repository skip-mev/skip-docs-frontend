import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import NavBar from "../components/NavBar";

const LINKS = [
  {
    url: "/docs",
    label: "Overview",
  },
  {
    url: "/docs/api",
    label: "Skip API",
  },
  {
    url: "/docs/slinky",
    label: "Slinky",
  },
  {
    url: "/docs/opensource",
    label: "Open Source",
  },
];

interface Props {
  children?: React.ReactNode;
}

const DocsLayout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <NavBar />
      </div>
      <div className="pt-16">
        <div className="bg-[#1C1D1E] fixed inset-y-0 top-16 w-72 px-6 hidden lg:block">
          <div className="pt-10">
            <ul className="list-disc list-inside text-[#7B7B7C]">
              {LINKS.map(({ url, label }) => (
                <Link className="w-full inline-block py-3" href={url} key={url}>
                  <li
                    className={`hover:text-white transition-colors ${
                      url === pathname ? "text-white" : ""
                    }`}
                  >
                    {label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="py-20 px-5 lg:px-20">
            <div className="max-w-screen-lg">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsLayout;
