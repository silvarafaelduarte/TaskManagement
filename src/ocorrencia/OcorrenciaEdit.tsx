import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const OcorrenciaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataRegistro" source="dataRegistro" />
        <TextInput label="descricao" source="descricao" />
      </SimpleForm>
    </Edit>
  );
};
