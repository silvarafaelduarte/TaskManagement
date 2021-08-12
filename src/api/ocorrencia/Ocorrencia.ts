import { Entrega } from "../entrega/Entrega";

export type Ocorrencia = {
  createdAt: Date;
  dataRegistro: Date | null;
  descricao: string;
  entregas?: Array<Entrega>;
  id: string;
  updatedAt: Date;
};
