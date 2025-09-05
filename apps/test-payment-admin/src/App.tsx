import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MainList } from "./main/MainList";
import { MainCreate } from "./main/MainCreate";
import { MainEdit } from "./main/MainEdit";
import { MainShow } from "./main/MainShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"test payment"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Main"
          list={MainList}
          edit={MainEdit}
          create={MainCreate}
          show={MainShow}
        />
      </Admin>
    </div>
  );
};

export default App;
