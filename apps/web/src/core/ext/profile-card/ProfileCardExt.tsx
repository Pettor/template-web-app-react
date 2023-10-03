import type { ReactElement } from "react";
import { useFetchPersonalProfile } from "core-api";
import { ProfileCardResponsive } from "shared-ui";
import { useAuth } from "../../auth/UseAuth";

export function ProfileCardExt(): ReactElement {
  const { logout } = useAuth();
  const { data } = useFetchPersonalProfile();

  function handleLogout(): void {
    logout();
  }

  if (!data) {
    return <ProfileCardResponsive />;
  }

  const { email, firstName, lastName } = data;
  return <ProfileCardResponsive name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} />;
}
