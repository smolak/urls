import { FC } from "react";

export const RegisterSuccess: FC = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Success</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You&apos;re one step closer from using our platform.
            <br />
            Check your email for an activation link.
          </p>
        </div>
      </div>
    </div>
  );
};
