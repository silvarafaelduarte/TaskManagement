import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";
import { DestinatarioWhereUniqueInput } from "../destinatario/DestinatarioWhereUniqueInput";
import { StatusEntregaWhereUniqueInput } from "../statusEntrega/StatusEntregaWhereUniqueInput";

export type EntregaUpdateInput = {
  cliente?: ClienteWhereUniqueInput;
  dataFinalizada?: Date | null;
  dataPedido?: Date;
  destinatario?: DestinatarioWhereUniqueInput;
  statusEntrega?: StatusEntregaWhereUniqueInput | null;
  taxa?: number;
};
