import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OcorrenciaWhereInput = {
  dataRegistro?: DateTimeNullableFilter;
  descricao?: StringFilter;
  id?: StringFilter;
};
