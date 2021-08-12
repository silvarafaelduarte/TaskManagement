import { StatusEntrega as TStatusEntrega } from "../api/statusEntrega/StatusEntrega";

export const STATUSENTREGA_TITLE_FIELD = "id";

export const StatusEntregaTitle = (record: TStatusEntrega) => {
  return record.id;
};
