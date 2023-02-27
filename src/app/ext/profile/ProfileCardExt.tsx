import { ReactElement } from "react";
import ProfileCardResponsive from "../../../components/layout/profile/ProfileCardResponsive";
import useProfileInfo from "../../api/queries/user/profile-info/UseProfileInfo";
import useAuth from "../../auth/UseAuth";

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
