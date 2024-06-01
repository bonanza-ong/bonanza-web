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

const Routes = (): React.JSX.Element => {
  return (
    <ReactRoutes>
      <Route path={"/signin"} element={<Signin />} />
      <Route path={"/"} element={<Home />} />
      <Route path={"/home"} element={<Home />} />
      <Route
        path={"/recipient"}
        element={
          <ProtectedRoute>
            <Recipient />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/supporter"}
        element={
          <ProtectedRoute>
            <Supporter />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/provider"}
        element={
          <ProtectedRoute>
            <Provider />
          </ProtectedRoute>
        }
      />
      <Route
        path={"/administrator"}
        element={
          <ProtectedRoute>
            <Administrator />
          </ProtectedRoute>
        }
      />
      <Route path={"*"} element={<NotFound />} />
    </ReactRoutes>
  );
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { keycloak } = useKeycloak();

  return keycloak.authenticated ? children : <Navigate to="/home" />;
};

export default Routes;
