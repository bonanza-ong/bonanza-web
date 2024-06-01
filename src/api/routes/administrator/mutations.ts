import { useMutation } from "@tanstack/react-query";
import { administratorRoute } from ".";
import { MUTATION_KEYS } from "../../config/mutation-keys";

export interface Item {
  nome: string;
  categoriaId: string;
}

export interface ItemResponse {
  id: string;
  nome: string;
  categoriaPrincipal: {
    id: string;
    nome: string;
    pai: string;
  };
}

export const usePostItem = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_ITEM],
    mutationFn: async (item: Item) =>
      await administratorRoute.post("/items", item),
  });
};
