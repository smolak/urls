import { FC, useState } from "react";
import { Register } from "./Register";
import { RegisterSuccess } from "./RegisterSuccess";
import { Login } from "./Login";
import { LogoutSuccess } from "./LogoutSuccess";
import { supabase } from "../../utils/supabaseClient";
import { LogoutFailure } from "./LogoutFailure";

export enum AUTH_STEP {
  REGISTER,
  REGISTER_SUCCESS,
  LOGIN,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
}

interface AuthContainerProps {
  step: AUTH_STEP.LOGIN | AUTH_STEP.LOGOUT | AUTH_STEP.REGISTER;
}

export const AuthContainer: FC<AuthContainerProps> = (props) => {
  const [step, setStep] = useState<AUTH_STEP>(props.step);

  const onRegisterSuccess = () => setStep(AUTH_STEP.REGISTER_SUCCESS);
  const onLoginSuccess = () => window.location.replace(window.location.origin);

  switch (step) {
    case AUTH_STEP.REGISTER_SUCCESS:
      return <RegisterSuccess />;

    case AUTH_STEP.REGISTER:
      return <Register onSuccess={onRegisterSuccess} />;

    case AUTH_STEP.LOGIN:
      return <Login onSuccess={onLoginSuccess} />;

    case AUTH_STEP.LOGOUT:
      supabase.auth
        .signOut()
        .then(() => {
          setStep(AUTH_STEP.LOGOUT_SUCCESS);
        })
        .catch(() => {
          setStep(AUTH_STEP.LOGOUT_FAILURE);
        });
      return <div />;
      break;

    case AUTH_STEP.LOGOUT_SUCCESS:
      // TODO: change to global logging out so that the user can stay on a given page (unless it's behind login)
      // Perhaps by using a very simple component with useEffect and the supabase.auth.signOut called in it.
      // Question - how to handle logout failure (global context?)
      return <LogoutSuccess />;

    case AUTH_STEP.LOGOUT_FAILURE:
      return <LogoutFailure />;
  }
};
