import { Ocorrencia as TOcorrencia } from "../api/ocorrencia/Ocorrencia";

export const OCORRENCIA_TITLE_FIELD = "descricao";

export const OcorrenciaTitle = (record: TOcorrencia) => {
  return record.descricao;
};
