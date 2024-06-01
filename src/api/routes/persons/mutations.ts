import { useMutation } from "@tanstack/react-query";
import { personRoute } from ".";
import { MUTATION_KEYS } from "../../config/mutation-keys";

export const usePostPerson = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_PERSON],
    mutationFn: async () => await personRoute.post(""),
  });
};
