import { AppHeader } from "@/widgets/app-header/app-header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader variant="auth" />
      {children}
    </>
  );
}
