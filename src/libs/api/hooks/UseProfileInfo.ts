import { useQuery } from "react-query";
import { ProfileDto } from "../service/responses/ProfileDto";
import { convertFromDto } from "../types/ProfileInfo";
import useApi from "./UseApi";

export default function useProfileInfo() {
  const api = useApi();

  const { data, isLoading } = useQuery("profile", async () => {
    const response = await api.get<ProfileDto>("/api/personal/profile");
    return convertFromDto(response.data);
  });

  return { data, isLoading };
}
