import type { ProfileInfo } from "./Classes";
import type { ProfileInfoDto } from "./Schema";

export function convertFromDto(dto: ProfileInfoDto): ProfileInfo {
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
