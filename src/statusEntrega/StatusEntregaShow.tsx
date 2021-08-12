import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENTE_TITLE_FIELD } from "../cliente/ClienteTitle";
import { DESTINATARIO_TITLE_FIELD } from "../destinatario/DestinatarioTitle";
import { STATUSENTREGA_TITLE_FIELD } from "./StatusEntregaTitle";

export const StatusEntregaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Entrega"
          target="StatusEntregaId"
          label="Entregas"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Cliente"
              source="cliente.id"
              reference="Cliente"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
