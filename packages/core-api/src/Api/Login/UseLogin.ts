import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import type { LoginData } from "./LoginClasses";
import { postByData } from "./Spec/loginByData";

export function useLogin(): UseMutationResult<void, ApiError, LoginData> {
  return useMutation<void, ApiError, LoginData>({
    mutationFn: async (data: LoginData) => {
      return await postByData(data);
    },
  });
}
