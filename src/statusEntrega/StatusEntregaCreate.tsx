import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const StatusEntregaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pendente", value: "P" },
            { label: "Finalizada", value: "F" },
            { label: "Cancelada", value: "C" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
