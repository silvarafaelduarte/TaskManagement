import { ClienteWhereInput } from "./ClienteWhereInput";
import { ClienteOrderByInput } from "./ClienteOrderByInput";

export type ClienteFindManyArgs = {
  where?: ClienteWhereInput;
  orderBy?: ClienteOrderByInput;
  skip?: number;
  take?: number;
};
