import type { InferType } from "yup";
import { object, string } from "yup";
import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { ApplicationInfo } from "../ApplicationInfoClasses";

const applicationInfoSchema = object({
  version: string().required(),
});

type ApplicationInfoDto = InferType<typeof applicationInfoSchema>;

function convertFromDto(dto: ApplicationInfoDto): ApplicationInfo {
  return {
    version: dto.version,
  };
}

export async function fetchApplicationInfo(): Promise<ApplicationInfo> {
  try {
    const { data } = await apiClient.get<ApplicationInfoDto>("/api/application/info");
    const userSchema = await applicationInfoSchema.validate(data);
    return convertFromDto(userSchema);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}
