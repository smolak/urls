import { FC } from "react";
import Link from "next/link";
import { LogoutLink } from "./LogoutLink";

export const LogoutFailure: FC = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Could not log out</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Something went wrong. <LogoutLink>Try again</LogoutLink>.
          </p>
        </div>
      </div>
    </div>
  );
};
