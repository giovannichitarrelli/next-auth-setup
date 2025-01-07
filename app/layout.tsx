import type { Metadata } from "next";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Next Auth setup",
  description: "Setup credentials authentication using next auth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
