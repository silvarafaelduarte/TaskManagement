import { Entrega } from "../entrega/Entrega";

export type Destinatario = {
  bairro: string | null;
  complemento: string | null;
  createdAt: Date;
  entregas?: Array<Entrega>;
  id: string;
  logradouro: string | null;
  nome: string;
  numero: string | null;
  updatedAt: Date;
};
