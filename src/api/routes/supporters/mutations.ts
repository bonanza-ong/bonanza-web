import { useMutation } from "@tanstack/react-query";
import { supportersRoute } from ".";
import { MUTATION_KEYS } from "../../config/mutation-keys";

export type CreateCompanyData = {
  name: string;
  cnpj: string;
  email: string;
};

export type CreateCompanyResponseData = {
  id: number;
  name: string;
  cnpj: string;
  email: string;
};

export const usePostSupporter = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_SUPPORTER],
    mutationFn: async () => await supportersRoute.post(""),
  });
};
