import { FC } from "react";
import Link from "next/link";

export const LogoutLink: FC = ({ children = "Logout" }) => {
  return (
    <Link href="/logout">
      <a className="font-medium text-green-700 hover:text-green-600">{children}</a>
    </Link>
  );
};
