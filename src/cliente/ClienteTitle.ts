import { Cliente as TCliente } from "../api/cliente/Cliente";

export const CLIENTE_TITLE_FIELD = "nome";

export const ClienteTitle = (record: TCliente) => {
  return record.nome;
};
