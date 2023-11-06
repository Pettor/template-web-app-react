import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import type { ApplicationInfo } from "./ApplicationInfoClasses";
import { fetchApplicationInfo } from "./Spec/fetch";

export function useFetchApplicationInfo(): UseMutationResult<ApplicationInfo, ApiError, void> {
  return useMutation<ApplicationInfo, ApiError>({
    mutationKey: ["application-info"],
    mutationFn: async () => {
      return fetchApplicationInfo();
    },
  });
}
