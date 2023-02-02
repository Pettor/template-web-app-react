import { ReactElement } from "react";
import useProfileInfo from "../../../libs/api/hooks/UseProfileInfo";
import useAuth from "../../../libs/auth/hooks/UseAuth";
import ProfileCardResponsive from "./ProfileCardResponsive";

export default function ProfileCardExt(): ReactElement {
  const { logout } = useAuth();
  const { data } = useProfileInfo();

  function handleLogout(): void {
    logout();
  }

  if (!data) {
    return <ProfileCardResponsive elevation={0} />;
  }

  const { email, firstName, lastName } = data;
  return (
    <ProfileCardResponsive name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} elevation={0} />
  );
}
