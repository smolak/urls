import { FC } from "react";
import Link from "next/link";

export const RegisterLink: FC = ({ children = "Register" }) => {
  return (
    <Link href="/register">
      <a className="font-medium text-green-700 hover:text-green-600">{children}</a>
    </Link>
  );
};
