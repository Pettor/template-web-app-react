import { useMemo } from "react";
import type { ProfileInfo } from "core-api";
import { useFetchPersonalProfileQuery } from "core-api";
import { useNavigate } from "react-router-dom";
import type { ProfileCardProps } from "shared-ui";
import { useAuth } from "~/core/auth/UseAuth";

export function useProfileCardModule(): ProfileCardProps {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data: profileInfo } = useFetchPersonalProfileQuery();

  const { name: profileName, email: profileEmail }: Pick<ProfileInfo, "email"> & { name: string } = useMemo(() => {
    if (!profileInfo) {
      return {
        email: "",
        name: "",
      };
    }

    const { firstName, lastName, email } = profileInfo;
    return {
      email: email,
      name: `${firstName} ${lastName}`,
    };
  }, [profileInfo]);

  function handleOnLogout(): void {
    logout();
  }

  function handleOnAbout(): void {
    navigate("/about");
  }

  return {
    email: profileEmail,
    name: profileName,
    onAbout: handleOnAbout,
    onLogout: handleOnLogout,
  };
}
