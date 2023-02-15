import { useQuery } from "@tanstack/react-query";
import { ProfileDto } from "../service/responses/ProfileDto";
import { convertFromDto, ProfileInfo } from "../types/ProfileInfo";
import useApi from "./UseApi";

interface UseProfileInfo {
  data: ProfileInfo | undefined;
  isLoading: boolean;
}

export default function useProfileInfo(): UseProfileInfo {
  const api = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["profile-info"],
    queryFn: async () => {
      const response = await api.get<ProfileDto>("/api/personal/profile");
      return convertFromDto(response.data);
    },
  });

  return { data, isLoading };
}
