import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../config/query-keys";
import { supportersRoute } from ".";

export interface Supporter {
  id: string;
  pessoaId: string;
  usuarioId: string;
  nome: string;
  status: string;
  enderecos: Address[];
}

export interface Address {
  id: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  localizacao: Location;
}

export interface Location {
  id: string;
  latitude: number;
  longitude: number;
  geocode: string;
  geohash: string;
}

export enum SupporterStatus {
  VERIFICADO = "VERIFICADO",
  AGUARDANDO_VERIFICACAO = "AGUARDANDO_VERIFICACAO",
}

export const useGetSupporters = (
  page: number,
  size: number,
  status: SupporterStatus,
) => {
  return useQuery<Supporter[]>({
    queryKey: [QUERY_KEYS.SUPPORTERS, page, size, status],
    queryFn: async () =>
      (
        await supportersRoute.get("", {
          params: {
            status,
            page,
            size,
          },
        })
      ).data,
    enabled: false,
  });
};
