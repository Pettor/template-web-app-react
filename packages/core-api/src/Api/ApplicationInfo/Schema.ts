import type { InferType } from "yup";
import { object, string } from "yup";

export const applicationInfoSchema = object({
  version: string().required(),
});

export type ApplicationInfoDto = InferType<typeof applicationInfoSchema>;
