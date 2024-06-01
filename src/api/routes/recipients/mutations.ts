import { useMutation } from "@tanstack/react-query";
import { recipientsRoute } from ".";
import { MUTATION_KEYS } from "../../config/mutation-keys";

export interface Demand {
  itemId: string;
  quantidadeSolicitada: number;
  detalhes: string;
}

export interface DemandRequest {
  demand: Demand;
  recipientId: string;
}

export interface DemandResponse {
  id: string;
  padrinhoId: string;
  beneficiarioId: string;
  status: string;
  informacoesItem: Demand;
}

export const usePostDemand = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.CREATE_DEMAND],
    mutationFn: async (demandRequest: DemandRequest) =>
      (
        await recipientsRoute.post(
          `${demandRequest.recipientId}`,
          demandRequest.demand,
        )
      ).data,
  });
};

export interface AnswerDemandRequest {
  recipientId: string;
  demandId: string;
  quantityProvided: number;
}

export interface AnswerDemandResponse {
  id: string;
  status: string;
  quantidadeProvida: number;
  demanda: {
    id: string;
    beneficiarioId: string;
    quantidadeSolicitada: number;
    quantidadeAtendida: number;
    item: {
      id: string;
      nome: string;
    };
  };
}

export const usePostAnswerDemand = () => {
  return useMutation({
    mutationKey: [MUTATION_KEYS.ANSWER_DEMAND],
    mutationFn: async (demandRequest: AnswerDemandRequest) =>
      (
        await recipientsRoute.post(
          `${demandRequest.recipientId}/${demandRequest.demandId}`,
          demandRequest.quantityProvided,
        )
      ).data,
  });
};
