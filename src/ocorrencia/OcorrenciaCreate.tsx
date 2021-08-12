import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const OcorrenciaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dataRegistro" source="dataRegistro" />
        <TextInput label="descricao" source="descricao" />
      </SimpleForm>
    </Create>
  );
};
