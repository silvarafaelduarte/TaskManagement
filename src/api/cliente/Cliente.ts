import { Entrega } from "../entrega/Entrega";

export type Cliente = {
  createdAt: Date;
  email: string | null;
  entregas?: Array<Entrega>;
  id: string;
  nome: string;
  telefone: string | null;
  updatedAt: Date;
};
