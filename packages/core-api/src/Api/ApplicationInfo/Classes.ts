import type { ApplicationInfoDto } from "./Schema";

export const QUERY_KEY_APPLICATION_INFO = ["application-info"] as const;

export interface ApplicationInfo {
  version: string;
}

export function convertFromDto(dto: ApplicationInfoDto): ApplicationInfo {
  return {
    version: dto.version,
  };
}
