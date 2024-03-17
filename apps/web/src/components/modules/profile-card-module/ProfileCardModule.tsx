import type { ReactElement } from "react";
import { useAppSessionContent } from "~/classes/app-session/UseAppSessionContent";
import { ProfileCard } from "~/components/actions/profile-card";

export function ProfileCardModule(): ReactElement {
  const appSessionProps = useAppSessionContent();
  return <ProfileCard {...appSessionProps} />;
}
