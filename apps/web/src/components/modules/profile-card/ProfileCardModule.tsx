import type { ReactElement } from "react";
import { ProfileCard } from "shared-ui";
import { useProfileCardModule } from "./UseProfileCardModule";

export function ProfileCardModule(): ReactElement {
  const profileProps = useProfileCardModule();
  return <ProfileCard {...profileProps} />;
}
