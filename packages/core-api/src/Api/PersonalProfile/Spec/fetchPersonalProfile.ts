import type { InferType } from "yup";
import { object, string, boolean } from "yup";
import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { ProfileInfo } from "../PersonalProfileClasses";

const profileInfoSchema = object({
  id: string().required(),
  userName: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  email: string().required(),
  isActive: boolean().required(),
  emailConfirmed: boolean().required(),
  phoneNumber: string().optional().nullable(),
  imageUrl: string().optional().nullable(),
});

type ProfileInfoDto = InferType<typeof profileInfoSchema>;

function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
  return {
    id: dto.id,
    userName: dto.userName,
    firstName: dto.firstName,
    lastName: dto.lastName,
    email: dto.email,
    isActive: dto.isActive.valueOf(),
    emailConfirmed: dto.emailConfirmed.valueOf(),
    phoneNumber: dto.phoneNumber ?? undefined,
    imageUrl: dto.imageUrl ?? undefined,
  };
}

export async function fetchPersonalProfile(): Promise<ProfileInfo> {
  try {
    const { data } = await apiClient.get<ProfileInfoDto>("/api/personal/profile");
    const userSchema = await profileInfoSchema.validate(data);
    return convertFromDto(userSchema);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}
