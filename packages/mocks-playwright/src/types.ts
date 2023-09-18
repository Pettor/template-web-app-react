import type { ApiClientConfig } from "@mocks-server/admin-api-client";

export interface MocksServerPlaywrightApiClientConfig extends ApiClientConfig {
  enabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PlaywrightEnvVarValue = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArrayOfValues = (string | number | boolean)[];

export type Log = string;
export type RequestLogs = Log | Log[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RequestError = any;
