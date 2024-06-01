import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../config/query-keys";
import { userRoute } from ".";

export interface User {
  id: string;
  email: string;
  emailVerificado: boolean;
  ativo: boolean;
}

export const useGetUsers = (email: string, max: number) => {
  return useQuery<User[]>({
    queryKey: [QUERY_KEYS.USERS, email, max],
    queryFn: async () =>
      (
        await userRoute.get("", {
          params: {
            email,
            max,
          },
        })
      ).data,
    enabled: true,
  });
};
