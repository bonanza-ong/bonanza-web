import { ThemeProvider } from "@mui/material";
import React from "react";
import Theme from "./Theme";
import { KeycloakProvider } from "../hooks/useKeycloak";

const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <KeycloakProvider>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </KeycloakProvider>
  );
};

export default Providers;
