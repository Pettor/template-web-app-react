import { useMemo } from "react";
import { useFetchPersonalProfileQuery } from "core-api";
import { useNavigate } from "react-router-dom";
import type { AppSessionContent } from "./AppSessionContent";
import { useAuth } from "~/core/auth/UseAuth";

export function useAppSessionContent(): AppSessionContent {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data: profileInfo } = useFetchPersonalProfileQuery();

  const { name: profileName, email: profileEmail }: Pick<AppSessionContent, "email"> & { name: string } =
    useMemo(() => {
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
