"use client";

import { SessionProvider } from "next-auth/react";
interface ProciderProps {
  children: React.ReactElement;
}

export default function Provider({ children }: ProciderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
