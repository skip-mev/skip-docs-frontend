import { Listbox } from "@headlessui/react";
import { FC, useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

interface SelectOptionProps {
  value: string;
}

const SelectOption: FC<SelectOptionProps> = ({ value }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `hover:bg-[#FFFFFF]/5 transition-colors block text-sm text-left px-4 py-2 w-full ${
          active ? "bg-[#FFFFFF]/5" : null
        }`
      }
      value={value}
    >
      {value}
    </Listbox.Option>
  );
};

const SelectOptionGroup: FC<{ children?: React.ReactNode; name: string }> = ({
  children,
  name,
}) => {
  return (
    <div>
      <p className="text-left text-sm text-[#F3F6F8]/50 font-bold px-4 py-2">
        {name}
      </p>
      {children}
    </div>
  );
};

interface SelectProps {
  alignMenu?: "left" | "right";
  buttonClassName?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const Select: FC<SelectProps> = ({
  alignMenu = "left",
  buttonClassName = "",
  children,
  placeholder = "",
  onChange = () => {},
  value: _value,
}) => {
  const [value, setValue] = useState(_value || "");

  useUpdateEffect(() => {
    if (value !== _value) {
      onChange(value);
    }
  }, [value, _value, onChange]);

  return (
    <Listbox value={value} onChange={(nextValue) => setValue(nextValue)}>
      <div className="relative">
        <Listbox.Button
          className={`flex items-center justify-between text-sm rounded-md whitespace-nowrap px-2.5 pr-1 py-1.5 gap-2 transition-colors hover:bg-[#F3F6F8] hover:bg-opacity-10 outline-none min-w-[160px] ${buttonClassName}`}
        >
          <span>{value === "" ? placeholder : value}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 flex-shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Listbox.Button>
        <Listbox.Options
          className={`absolute w-52 mt-2 bg-[#1E1F20] rounded-xl border border-[#F3F6F8]/10 py-2 cursor-pointer outline-none z-40 ${
            alignMenu === "left" ? "left-0" : "right-0"
          }`}
        >
          {children}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Object.assign(Select, {
  Option: SelectOption,
  Group: SelectOptionGroup,
});
