import cn from "clsx";
import Link from "next/link";
import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  externalLink?: boolean;
  fullWidth?: boolean;
  href?: string;
  large?: boolean;
  onClick?:
    | (MouseEventHandler<HTMLButtonElement> &
        MouseEventHandler<HTMLAnchorElement>)
    | undefined;
  type?: "primary" | "ghost";
}

const Button: FC<ButtonProps> = ({
  buttonType,
  children,
  className,
  disabled,
  externalLink,
  fullWidth,
  href,
  large,
  onClick = () => {},
  type = "primary",
}) => {
  const TAG = href ? "a" : "button";

  const btnClass = cn(
    "font-bold text-l rounded-full px-2.5 py-1.5  inline-block",
    {
      "bg-[#ffffff] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] disabled:bg-opacity-50":
        type === "primary",
      "text-[#F3F6F8B3] hover:bg-[#F3F6F8] hover:bg-opacity-10 active:bg-opacity-[0.15] disabled:text-[#F3F6F8B3]/50 disabled:hover:bg-transparent":
        type === "ghost",
      "px-7 py-3": large,
      "block w-full": fullWidth,
    },
    className
  );

  if (href && !externalLink) {
    return (
      <Link className={btnClass} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <TAG
      className={btnClass}
      disabled={disabled}
      href={href}
      onClick={onClick}
      target={externalLink ? "_blank" : undefined}
      type={buttonType}
    >
      {children}
    </TAG>
  );
};

export default Button;
