import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DestinatarioWhereUniqueInput } from "../destinatario/DestinatarioWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StatusEntregaWhereUniqueInput } from "../statusEntrega/StatusEntregaWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type EntregaWhereInput = {
  cliente?: ClienteWhereUniqueInput;
  dataFinalizada?: DateTimeNullableFilter;
  dataPedido?: DateTimeFilter;
  destinatario?: DestinatarioWhereUniqueInput;
  id?: StringFilter;
  statusEntrega?: StatusEntregaWhereUniqueInput;
  taxa?: FloatFilter;
};
