import { useMemo } from "react";
import { useFetchPersonalProfileQuery } from "api-package";
import { useNavigate } from "react-router-dom";
import type { IAppSessionContent } from "./IAppSessionContent";
import { useAuth } from "~/core/auth/UseAuth";

export function useAppSessionContent(aboutRoute: string = "/about"): IAppSessionContent {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data: profileInfo } = useFetchPersonalProfileQuery();

  const { name: profileName, email: profileEmail }: Pick<IAppSessionContent, "email"> & { name: string } =
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
    navigate(aboutRoute);
  }

  return {
    email: profileEmail,
    name: profileName,
    onAbout: handleOnAbout,
    onLogout: handleOnLogout,
  };
}
