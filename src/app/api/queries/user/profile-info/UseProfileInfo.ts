import { useQuery } from "@tanstack/react-query";
import useApi from "../../../UseApi";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileInfoDto } from "./ProfileInfoDto";

function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
  return {
    ...dto,
  };
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
