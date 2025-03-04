import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../Client";
import { ServiceErrorFactory } from "../../Service/ServiceErrorFactory";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import type { LoginData } from "./Classes";

export async function postLogin(data: LoginData): Promise<void> {
  try {
    await apiClient.login(data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

export function usePostLoginMutate(): UseMutationResult<void, ApiError, LoginData> {
  return useMutation<void, ApiError, LoginData>({
    mutationFn: async (data: LoginData) => {
      return await postLogin(data);
    },
  });
}
