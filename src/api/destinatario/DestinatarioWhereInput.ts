import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DestinatarioWhereInput = {
  bairro?: StringNullableFilter;
  complemento?: StringNullableFilter;
  id?: StringFilter;
  logradouro?: StringNullableFilter;
  nome?: StringFilter;
  numero?: StringNullableFilter;
};
