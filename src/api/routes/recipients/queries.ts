import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../config/query-keys";
import { recipientsRoute } from ".";

export interface Recipient {
  id: string;
  nome: string;
}

export const useGetRecipients = (page: number, size: number) => {
  return useQuery<Recipient[]>({
    queryKey: [QUERY_KEYS.RECIPIENTS, page, size],
    queryFn: async () =>
      (await recipientsRoute.get("", { params: { page, size } })).data,
    enabled: false,
  });
};
