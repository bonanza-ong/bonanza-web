import { createContext, ReactNode, useContext } from "react";
import Keycloak from "keycloak-js";
import { keycloak } from "../app/Keycloak";

type ProviderProps = { children: ReactNode };

type KeycloakContextData = {
  keycloak: Keycloak;
};

const initialValue: KeycloakContextData = {
  keycloak: keycloak,
};
const KeycloakContext = createContext<KeycloakContextData>(initialValue);

const KeycloakProvider = ({ children }: ProviderProps) => {
  return (
    <KeycloakContext.Provider value={{ keycloak }}>
      {children}
    </KeycloakContext.Provider>
  );
};

const useKeycloak = () => {
  const context = useContext(KeycloakContext);
  if (context === undefined) {
    throw new Error("useKeycloak must be used within a KeycloakProvider");
  }
  return context;
};

export { KeycloakProvider, useKeycloak };
