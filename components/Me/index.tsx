import { FC } from "react";
import { Session } from "@supabase/gotrue-js";
import { LogoutLink } from "../Auth/LogoutLink";

interface MeProps {
  session: Session;
}

export const Me: FC<MeProps> = ({ session }) => {
  return (
    <div>
      <div>You are logged in using {session?.user?.email} email.</div>
      <LogoutLink />
    </div>
  );
};
