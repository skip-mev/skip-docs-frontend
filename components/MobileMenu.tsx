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
            <div className="p-4 space-y-1">
              <Link
                className="flex font-light text-2xl  gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors "
                href="/"
                onClick={onClose}
              >
                <span>Home</span>
              </Link>

              <Link
                className="flex font-light text-2xl  gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors "
                href="/"
                onClick={onClose}
              >
                <span>Discord</span>
              </Link>
              
              <Link
                className="flex font-light text-2xl  gap-4 py-4 px-4 hover:bg-[#F3F6F8] hover:bg-opacity-5 transition-colors "
                href="https://jobs.skip.money"
                onClick={onClose}
                target="_blank"
                rel="noreferrer"
              >
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
