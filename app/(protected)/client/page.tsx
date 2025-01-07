"use client";
import UserInfo from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
 
const ClientPage =   () => {
   const user = useCurrentUser();

   if (user === null) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <p>Usuário não autenticado</p>;
  }

  return (
    <div>
      <UserInfo label="Client component" user={user} />
    </div>
  );
};

export default ClientPage;
