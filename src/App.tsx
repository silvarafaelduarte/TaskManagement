import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import basicHttpAuthProvider from "./auth-provider/ra-auth-basic-http";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DestinatarioList } from "./destinatario/DestinatarioList";
import { DestinatarioCreate } from "./destinatario/DestinatarioCreate";
import { DestinatarioEdit } from "./destinatario/DestinatarioEdit";
import { DestinatarioShow } from "./destinatario/DestinatarioShow";
import { EntregaList } from "./entrega/EntregaList";
import { EntregaCreate } from "./entrega/EntregaCreate";
import { EntregaEdit } from "./entrega/EntregaEdit";
import { EntregaShow } from "./entrega/EntregaShow";
import { OcorrenciaList } from "./ocorrencia/OcorrenciaList";
import { OcorrenciaCreate } from "./ocorrencia/OcorrenciaCreate";
import { OcorrenciaEdit } from "./ocorrencia/OcorrenciaEdit";
import { OcorrenciaShow } from "./ocorrencia/OcorrenciaShow";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { StatusEntregaList } from "./statusEntrega/StatusEntregaList";
import { StatusEntregaCreate } from "./statusEntrega/StatusEntregaCreate";
import { StatusEntregaEdit } from "./statusEntrega/StatusEntregaEdit";
import { StatusEntregaShow } from "./statusEntrega/StatusEntregaShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Logg"}
        dataProvider={dataProvider}
        authProvider={basicHttpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Destinatario"
          list={DestinatarioList}
          edit={DestinatarioEdit}
          create={DestinatarioCreate}
          show={DestinatarioShow}
        />
        <Resource
          name="Entrega"
          list={EntregaList}
          edit={EntregaEdit}
          create={EntregaCreate}
          show={EntregaShow}
        />
        <Resource
          name="Ocorrencia"
          list={OcorrenciaList}
          edit={OcorrenciaEdit}
          create={OcorrenciaCreate}
          show={OcorrenciaShow}
        />
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="StatusEntrega"
          list={StatusEntregaList}
          edit={StatusEntregaEdit}
          create={StatusEntregaCreate}
          show={StatusEntregaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
