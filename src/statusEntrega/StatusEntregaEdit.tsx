import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const StatusEntregaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
