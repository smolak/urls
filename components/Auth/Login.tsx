import { FC, FormEvent, useState } from "react";
import clsx from "clsx";
import { LoaderIcon } from "../icons/Loader";
import { supabase } from "../../utils/supabaseClient";
import { RegisterLink } from "./RegisterLink";

interface LoginForm extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginProps {
  onSuccess: () => void;
}

export const Login: FC<LoginProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onFormSubmit = async (e: FormEvent<LoginForm>) => {
    e.preventDefault();
    const form = e.target as LoginForm;

    const email = form.email.value.trim();
    const password = form.password.value;

    setIsLoading(true);
    const { error, user } = await supabase.auth.signIn({ email, password });
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account yet? <RegisterLink />.
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
                  Login
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
