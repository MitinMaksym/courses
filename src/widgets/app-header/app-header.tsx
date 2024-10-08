import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

export const AppHeader = ({
  variant,
}: {
  variant: "public" | "auth" | "private";
}) => {
  const isProfileVisible = variant !== "auth";
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfileVisible && <Profile />}
      actions={<ToggleTheme />}
    />
  );
};
