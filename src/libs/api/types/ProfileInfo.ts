import { ProfileDto } from "../service/responses/ProfileDto";

export interface ProfileInfo {
  id: "string";
  userName: "string";
  firstName: "string";
  lastName: "string";
  email: "string";
  isActive: true;
  emailConfirmed: true;
  phoneNumber: "string";
  imageUrl: "string";
}

export function convertFromDto(dto: ProfileDto): ProfileInfo {
  return {
    ...dto,
  };
}
