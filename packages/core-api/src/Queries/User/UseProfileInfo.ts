import { useQuery } from "@tanstack/react-query";
import { produce } from "immer";
import type { ProfileInfoDto } from "../../Dto/ProfileInfoDto";
import { useApi } from "../../UseApi";
import type { ProfileInfo } from "./ProfileInfo";

function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
  return produce(dto, (draft) => {
    return draft;
  });
}

export function useProfileInfo(): {
  data: ProfileInfo | undefined;
  isLoading: boolean;
} {
  const api = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["profile-info"],
    queryFn: async () => {
      const response = await api.get<ProfileInfoDto>("/api/personal/profile");
      return convertFromDto(response.data);
    },
  });

  return { data, isLoading };
}
