import { Entrega as TEntrega } from "../api/entrega/Entrega";

export const ENTREGA_TITLE_FIELD = "id";

export const EntregaTitle = (record: TEntrega) => {
  return record.id;
};
