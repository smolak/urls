import { FC } from "react";
import Link from "next/link";
import { LoginLink } from "./LoginLink";

export const LogoutSuccess: FC = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Logged out</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You&apos;ve logged out successfully.
            <br />
            See you soon 👋
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            <Link href="/">
              <a className="font-medium text-green-700 hover:text-green-600">Homepage</a>
            </Link>{" "}
            | <LoginLink />
          </p>
        </div>
      </div>
    </div>
  );
};
