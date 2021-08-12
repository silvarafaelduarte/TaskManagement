import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DestinatarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Destinatarios"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bairro" source="bairro" />
        <TextField label="complemento" source="complemento" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logradouro" source="logradouro" />
        <TextField label="nome" source="nome" />
        <TextField label="numero" source="numero" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
