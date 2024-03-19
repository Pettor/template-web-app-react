import type { QueryClient } from "@tanstack/react-query";
import type { ApplicationInfo } from "core-api";
import { fetchApplicationInfoQuery, QUERY_KEY_APPLICATION_INFO } from "core-api";
import type { AboutPageProps } from "./AboutPage";

export async function loader(queryClient: QueryClient): Promise<AboutPageProps> {
  const query = fetchApplicationInfoQuery();

  const { version } =
    queryClient.getQueryData<ApplicationInfo>(QUERY_KEY_APPLICATION_INFO) ?? (await queryClient.fetchQuery(query));
  return {
    serverVersion: version,
  };
}
