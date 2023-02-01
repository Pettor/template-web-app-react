import useProfileInfo from "../../../libs/api/hooks/UseProfileInfo";
import useAuth from "../../../libs/auth/hooks/UseAuth";
import ProfileCard from "./ProfileCard";

export default function ProfileCardExt() {
  const { logout } = useAuth();
  const { data } = useProfileInfo();

  function handleLogout() {
    logout();
  }

  if (!data) {
    return <ProfileCard elevation={0} />;
  }

  const { email, firstName, lastName } = data;
  return <ProfileCard name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} elevation={0} />;
}