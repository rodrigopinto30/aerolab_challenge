import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/provider";
import {Provider as UserProvider} from './user/context';
import Layout from "~/app/layout";

import theme from './theme';
import "./theme.css";
import HomeScreen from "./app/screens/Home";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Layout>
          <HomeScreen></HomeScreen>
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
