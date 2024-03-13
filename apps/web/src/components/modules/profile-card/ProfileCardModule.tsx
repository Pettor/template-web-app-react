import type { ReactElement } from "react";
import { ProfileCard } from "shared-ui";
import { useProfileCardModule } from "./UseProfileCardModule";

export function ProfileCardModule(): ReactElement {
  const { profileInfo, handleLogout } = useProfileCardModule();

  if (!profileInfo) {
    return <ProfileCard onLogout={handleLogout} />;
  }

  const { email, firstName, lastName } = profileInfo;
  return <ProfileCard name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} />;
}
