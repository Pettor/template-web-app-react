import { produce } from "immer";
import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { ProfileInfo } from "../PersonalProfileClasses";
import type { ProfileInfoDto } from "./ProfileInfoDto";

function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
  return produce(dto, (draft) => {
    return draft;
  });
}

export async function fetch(): Promise<ProfileInfo> {
  try {
    const { data } = await apiClient.get<ProfileInfoDto>("/api/personal/profile");
    return convertFromDto(data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}
