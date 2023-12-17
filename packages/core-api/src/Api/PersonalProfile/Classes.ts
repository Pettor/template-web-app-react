export const QUERY_KEY_PROFILE_INFO = ["profile-info"] as const;

export interface ProfileInfo {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  emailConfirmed: boolean;
  phoneNumber?: string;
  imageUrl?: string;
}
