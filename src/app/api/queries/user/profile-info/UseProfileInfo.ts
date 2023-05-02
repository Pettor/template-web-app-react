import { useQuery } from "@tanstack/react-query";
import { produce } from "immer";
import useApi from "../../../UseApi";
import type { ProfileInfo } from "./ProfileInfo";
import type { ProfileInfoDto } from "./ProfileInfoDto";

function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
  return produce(dto, (draft) => {
    return draft;
  });
}

export default function useProfileInfo(): {
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
