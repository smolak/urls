import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Session } from "@supabase/gotrue-js";
import { Me } from "../components/Me";
import { LoginLink } from "../components/Auth/LoginLink";
import { RegisterLink } from "../components/Auth/RegisterLink";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (session) {
    return <Me session={session} />;
  } else {
    return (
      <div>
        <LoginLink /> or <RegisterLink />
      </div>
    );
  }
}
