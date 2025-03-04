import type { InferType } from "yup";
import { object, string } from "yup";

export const tokenSchema = object({
  token: string().required(),
  refreshTokenExpiryTime: string().required(),
});

export type TokenDto = InferType<typeof tokenSchema>;
