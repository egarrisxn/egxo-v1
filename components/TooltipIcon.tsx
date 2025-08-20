import { ReactNode } from "react";
import { socialIcons } from "@/lib/data/icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

export const Icon = ({
  name,
  href,
  label,
  className,
  children,
}: {
  name: keyof typeof socialIcons;
  href: string;
  alt?: string;
  label: string;
  className?: string;
  children?: ReactNode;
}) => {
  const defaultClassName =
    "hover:text-green-400 transition-all focus:border-2 foocus:rounded-full duration-150 ease-in-out";
  const iconClassName = className || defaultClassName;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              role="img"
              aria-label={label}
              className={iconClassName}
            >
              {children || socialIcons[name]}
            </svg>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
