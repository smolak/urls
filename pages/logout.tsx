import { AUTH_STEP, AuthContainer } from "../components/Auth/AuthContainer";

export default function LoginPage() {
  return <AuthContainer step={AUTH_STEP.LOGOUT} />;
}
