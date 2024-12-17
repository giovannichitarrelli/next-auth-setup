/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { logout } from "@/actions/logout";

interface Props {
  children: React.ReactNode;
}

const LoginButton = ({ children }: Props) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
