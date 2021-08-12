import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENTE_TITLE_FIELD } from "../cliente/ClienteTitle";
import { DESTINATARIO_TITLE_FIELD } from "../destinatario/DestinatarioTitle";
import { STATUSENTREGA_TITLE_FIELD } from "../statusEntrega/StatusEntregaTitle";

export const EntregaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Cliente" source="cliente.id" reference="Cliente">
          <TextField source={CLIENTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataFinalizada" source="dataFinalizada" />
        <TextField label="dataPedido" source="dataPedido" />
        <ReferenceField
          label="Destinatario"
          source="destinatario.id"
          reference="Destinatario"
        >
          <TextField source={DESTINATARIO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="StatusEntrega"
          source="statusentrega.id"
          reference="StatusEntrega"
        >
          <TextField source={STATUSENTREGA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="taxa" source="taxa" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
