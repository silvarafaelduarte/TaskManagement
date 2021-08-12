import { Entrega } from "../entrega/Entrega";

export type StatusEntrega = {
  createdAt: Date;
  entregas?: Array<Entrega>;
  id: string;
  status?: "P" | "F" | "C" | null;
  updatedAt: Date;
};
