import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import NotFound from "../pages/not-found/NotFound";
import { ReactNode } from "react";
import { useKeycloak } from "../hooks/useKeycloak";
import Recipient from "../pages/recipient/Recipient";
import Signin from "../pages/signin/Signin";
import Home from "../pages/home/Home";
import Administrator from "../pages/administrator/Administrator";
import Supporter from "../pages/supporter/Supporter";
import Provider from "../pages/provider/Provider";
import Signup from "../pages/signup/Signup";
import AssignRole from "../pages/signup/AssignRole";
import { isFullyRegistred } from "../helpers/Keycloak.helper";

const Routes = (): React.JSX.Element => {
  return (
    <ReactRoutes>
      <Route path={"/signin"} element={<Signin />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"/home"} element={<Home />} />
      <Route
        path={"/assignrole"}
        element={
          <ProtectedRoute>
            <AssignRole />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/recipient"}
        element={
          <ProtectedRoute roles={["beneficiario", "administrador"]}>
            <Recipient />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/supporter"}
        element={
          <ProtectedRoute roles={["padrinho", "administrador"]}>
            <Supporter />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/provider"}
        element={
          <ProtectedRoute roles={["provedor", "administrador"]}>
            <Provider />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/administrator"}
        element={
          <ProtectedRoute roles={["administrador"]}>
            <Administrator />
          </ProtectedRoute>
        }
      />
      <Route path={"*"} element={<NotFound />} />
    </ReactRoutes>
  );
};

const ProtectedRoute = ({
  children,
  roles,
}: {
  children: ReactNode;
  roles?: string[];
}) => {
  const { keycloak } = useKeycloak();

  const authorized = roles
    ? roles?.some((role) => keycloak.realmAccess?.roles.includes(role))
    : true;
  const authenticated = keycloak.authenticated;

  if (
    authenticated &&
    !isFullyRegistred(keycloak.tokenParsed?.realm_access?.roles ?? [""]) &&
    window.location.pathname !== "/assignrole"
  ) {
    return <Navigate to="/assignrole" />;
  }

  return authenticated && authorized ? children : <Navigate to="/home" />;
};

export default Routes;
