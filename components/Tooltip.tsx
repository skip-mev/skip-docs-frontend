interface TooltipProps {
  children: React.ReactNode;
}

const Tooptip: React.FC<TooltipProps> = ({ children }) => {
  return (
    <span className="group relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 -mt-[2px] inline-block"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <div className="absolute right-0 hidden group-hover:block bg-[#000000] shadow w-80 p-4 rounded-lg text-sm text-left">
        {children}
      </div>
    </span>
  );
};

export default Tooptip;
