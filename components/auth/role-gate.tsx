"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
 import FormError from "../form-error";
import { UserRole } from "@prisma/client";

interface Props {
  children: React.ReactNode;
  allowedRole: UserRole;
}
const RoleGate = ({ children, allowedRole }: Props) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
