import { SortOrder } from "../../util/SortOrder";

export type EntregaOrderByInput = {
  clienteId?: SortOrder;
  createdAt?: SortOrder;
  dataFinalizada?: SortOrder;
  dataPedido?: SortOrder;
  destinatarioId?: SortOrder;
  id?: SortOrder;
  statusEntregaId?: SortOrder;
  taxa?: SortOrder;
  updatedAt?: SortOrder;
};
