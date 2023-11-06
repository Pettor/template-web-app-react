import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import type { ProfileInfo } from "./PersonalProfileClasses";
import { fetchPersonalProfile } from "./Spec/fetchPersonalProfile";

export function useQueryPersonalProfile(): UseQueryResult<ProfileInfo, ApiError> {
  return useQuery<ProfileInfo, ApiError>({
    queryKey: ["profile-info"],
    queryFn: async () => {
      return fetchPersonalProfile();
    },
  });
}
