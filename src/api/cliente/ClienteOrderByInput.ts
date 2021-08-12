import { SortOrder } from "../../util/SortOrder";

export type ClienteOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  telefone?: SortOrder;
  updatedAt?: SortOrder;
};
