import { FC } from "react";
import clsx from "clsx";

interface LoaderProps {
  className?: string;
}

export const LoaderIcon: FC<LoaderProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("w-4 h-4", className)}
      fill="none"
      viewBox="0 0 48 48"
      stroke="currentColor"
    >
      <path
        fill="currentColor"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
