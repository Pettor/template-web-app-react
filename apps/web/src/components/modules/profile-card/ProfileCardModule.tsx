import type { ReactElement } from "react";
import { ProfileCardResponsive } from "shared-ui";
import { useProfileCardModule } from "./UseProfileCardModule";

export function ProfileCardModule(): ReactElement {
  const { profileInfo, handleLogout } = useProfileCardModule();

  if (!profileInfo) {
    return <ProfileCardResponsive />;
  }

  const { email, firstName, lastName } = profileInfo;
  return <ProfileCardResponsive name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} />;
}
