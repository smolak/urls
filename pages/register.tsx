import { AUTH_STEP, AuthContainer } from "../components/Auth/AuthContainer";

export default function RegisterPage() {
  return <AuthContainer step={AUTH_STEP.REGISTER} />;
}
