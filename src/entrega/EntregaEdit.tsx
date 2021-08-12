import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ClienteTitle } from "../cliente/ClienteTitle";
import { DestinatarioTitle } from "../destinatario/DestinatarioTitle";
import { StatusEntregaTitle } from "../statusEntrega/StatusEntregaTitle";

export const EntregaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="cliente.id" reference="Cliente" label="Cliente">
          <SelectInput optionText={ClienteTitle} />
        </ReferenceInput>
        <DateTimeInput label="dataFinalizada" source="dataFinalizada" />
        <DateTimeInput label="dataPedido" source="dataPedido" />
        <ReferenceInput
          source="destinatario.id"
          reference="Destinatario"
          label="Destinatario"
        >
          <SelectInput optionText={DestinatarioTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="statusentrega.id"
          reference="StatusEntrega"
          label="StatusEntrega"
        >
          <SelectInput optionText={StatusEntregaTitle} />
        </ReferenceInput>
        <NumberInput label="taxa" source="taxa" />
      </SimpleForm>
    </Edit>
  );
};
