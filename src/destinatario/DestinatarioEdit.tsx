import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DestinatarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bairro" source="bairro" />
        <TextInput label="complemento" source="complemento" />
        <TextInput label="logradouro" source="logradouro" />
        <TextInput label="nome" source="nome" />
        <TextInput label="numero" source="numero" />
      </SimpleForm>
    </Edit>
  );
};
