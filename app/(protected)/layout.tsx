import { SessionProvider } from "next-auth/react";
import Navbar from "./_components/navbar";
import { auth } from "@/auth";

interface Props {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: Props) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
