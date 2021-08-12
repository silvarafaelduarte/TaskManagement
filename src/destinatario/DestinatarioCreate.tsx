import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DestinatarioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bairro" source="bairro" />
        <TextInput label="complemento" source="complemento" />
        <TextInput label="logradouro" source="logradouro" />
        <TextInput label="nome" source="nome" />
        <TextInput label="numero" source="numero" />
      </SimpleForm>
    </Create>
  );
};
