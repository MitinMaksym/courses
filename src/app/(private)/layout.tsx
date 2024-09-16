import { AppHeader } from "@/widgets/app-header/app-header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader variant="private" />
      {children}
    </>
  );
}
