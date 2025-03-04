import type { InferType } from "yup";
import { object, string, boolean } from "yup";

export const profileInfoSchema = object({
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

export type ProfileInfoDto = InferType<typeof profileInfoSchema>;
