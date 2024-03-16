import type { ReactElement } from "react";
import { useProfileCardModule } from "./UseProfileCardModule";
import { ProfileCard } from "~/components/actions/profile-card";

export function ProfileCardModule(): ReactElement {
  const profileProps = useProfileCardModule();
  return <ProfileCard {...profileProps} />;
}
