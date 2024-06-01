import { useMutation } from "@tanstack/react-query";
import { userRoute } from ".";
import { MUTATION_KEYS } from "../../config/mutation-keys";

export const usePostUser = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_USER],
    mutationFn: async () => await userRoute.post(""),
  });
};
