import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClienteWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringFilter;
  telefone?: StringNullableFilter;
};
