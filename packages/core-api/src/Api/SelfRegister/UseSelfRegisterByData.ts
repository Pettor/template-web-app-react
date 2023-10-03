import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import type { SelfRegisterData } from "./SelfRegisterClasses";
import { selfRegisterByData } from "./Spec/selfRegisterByData";

export function useSelfRegisterByData(): UseMutationResult<void, ApiError, SelfRegisterData> {
  return useMutation<void, ApiError, SelfRegisterData>({
    mutationFn: async (data: SelfRegisterData) => {
      return await selfRegisterByData(data);
    },
  });
}
