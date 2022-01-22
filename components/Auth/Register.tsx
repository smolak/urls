import { FC, FormEvent, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { supabase } from "../../utils/supabaseClient";
import { LoaderIcon } from "../icons/Loader";
import { LoginLink } from "./LoginLink";
import { ExternalLinkIcon } from "@heroicons/react/outline";

interface RegisterForm extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
  terms: HTMLInputElement;
}

interface RegisterProps {
  onSuccess: () => void;
}

export const Register: FC<RegisterProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = async (e: FormEvent<RegisterForm>) => {
    e.preventDefault();
    const form = e.target as RegisterForm;

    const email = form.email.value.trim();
    const password = form.password.value;

    setIsLoading(true);
    const { error, user } = await supabase.auth.signUp({ email, password });
    setIsLoading(false);

    if (error) {
      setErrorMessage(error.message);
    }

    if (user) {
      onSuccess();
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account? <LoginLink />.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form action="#" method="POST" className="mb-0 space-y-6" onSubmit={onFormSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input id="password" name="password" type="password" autoComplete="current-password" required />
                </div>
              </div>

              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" required />
                <label htmlFor="terms" className="flex ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <Link href="/terms-and-privacy-policy">
                    <a target="_blank" className="text-green-700 hover:text-green-600">
                      <span className="flex ml-1">
                        Terms and Privacy Policy
                        <ExternalLinkIcon className="w-3 h-3" />
                      </span>
                    </a>
                  </Link>
                  .
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={clsx(
                    "w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600",
                    isLoading && "cursor-wait bg-green-700/50"
                  )}
                >
                  {isLoading && <LoaderIcon />}
                  Register
                </button>
              </div>
            </form>
            {errorMessage && (
              <div className="mt-2">
                <div className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium bg-red-100">
                  <span className="text-red-800">{errorMessage}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
