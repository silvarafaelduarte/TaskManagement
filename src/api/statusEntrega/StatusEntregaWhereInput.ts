import { StringFilter } from "../../util/StringFilter";

export type StatusEntregaWhereInput = {
  id?: StringFilter;
  status?: "P" | "F" | "C";
};
