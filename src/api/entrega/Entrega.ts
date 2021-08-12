import { Cliente } from "../cliente/Cliente";
import { Destinatario } from "../destinatario/Destinatario";
import { Ocorrencia } from "../ocorrencia/Ocorrencia";
import { StatusEntrega } from "../statusEntrega/StatusEntrega";

export type Entrega = {
  cliente?: Cliente;
  createdAt: Date;
  dataFinalizada: Date | null;
  dataPedido: Date;
  destinatario?: Destinatario;
  id: string;
  ocorrencia?: Array<Ocorrencia>;
  statusEntrega?: StatusEntrega | null;
  taxa: number;
  updatedAt: Date;
};
