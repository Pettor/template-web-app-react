import type { ProfileInfo } from "core-api";
import { useFetchPersonalProfileQuery } from "core-api";
import { useAuth } from "~/core/auth/UseAuth";

export function useProfileCardModule(): {
  profileInfo: ProfileInfo | undefined;
  handleLogout: () => void;
} {
  const { logout } = useAuth();
  const { data: profileInfo } = useFetchPersonalProfileQuery();

  function handleLogout(): void {
    logout();
  }

  return { profileInfo, handleLogout };
}
