/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { FC, Fragment } from "react";
import Button from "./Button";

interface Props {
  open?: boolean;
  onClose: () => void;
}

const MobileMenu: FC<Props> = ({ open, onClose }) => {
  return (
    <Transition
      show={open}
      enter="ease-out duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-75"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <Dialog onClose={onClose}>
        <div className="absolute inset-0 z-50 flex justify-end">
          <Dialog.Panel className="bg-[#17181A] border-l border-gray-900 w-full max-w-sm shadow-2xl shadow-gray-500/30">
            <div className="h-16 flex items-center justify-end px-4">
              <button onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 block"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Button href="/registration" fullWidth large onClick={onClose}>
                Validator registration
              </Button>
            </div>
            <div className="p-4 space-y-4">
              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="/"
                onClick={onClose}
              >
                <img className="w-6" src="home-icon.svg" alt="" />
                <span>Home</span>
              </Link>
              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="/validators"
                onClick={onClose}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                  <rect x="2" y="2" width="16" height="16" fill="#171819" />
                  <rect x="7" y="7" width="6" height="6" fill="#D9D9D9" />
                </svg>

                <span>Validators</span>
              </Link>
              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="/activity"
                onClick={onClose}
              >
                <img className="w-6" src="activity-icon.svg" alt="" />
                <span>Activity</span>
              </Link>
              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="/products"
              >
                <img className="w-6" src="docs-icon.svg" alt="" />
                <span>Docs</span>
              </Link>

              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="https://ideas.skip.money"
                onClick={onClose}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#D9D9D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#D9D9D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Research</span>
              </Link>
              <Link
                className="flex font-extrabold text-base tracking-wide gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors rounded-lg"
                href="https://jobs.skip.money"
                onClick={onClose}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7H5.5C4.94772 7 4.5 7.44772 4.5 8V11M8 7V5C8 4.44772 8.44772 4 9 4H15C15.5523 4 16 4.44772 16 5V7M8 7H16M16 7H18.5C19.0523 7 19.5 7.44772 19.5 8V11M7 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V11M7 19.5V11.5M7 19.5H16.5M7 11.5L4.5 11M7 11.5L10 12M10 12V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V12M10 12H14M14 12L16.5 11.5M16.5 11.5L19.5 11M16.5 11.5V19.5M19.5 11V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Jobs</span>
              </Link>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
