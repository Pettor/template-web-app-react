import useProfileInfo from "../../../libs/api/hooks/UseProfileInfo";
import ProfileCard from "./ProfileCard";

export default function ProfileCardExt() {
  const { data } = useProfileInfo();

  if (!data) {
    return <ProfileCard elevation={0} />;
  }

  const { email, firstName, lastName } = data;
  return <ProfileCard name={`${firstName} ${lastName}`} email={email} elevation={0} />;
}
