import { Destinatario as TDestinatario } from "../api/destinatario/Destinatario";

export const DESTINATARIO_TITLE_FIELD = "bairro";

export const DestinatarioTitle = (record: TDestinatario) => {
  return record.bairro;
};
