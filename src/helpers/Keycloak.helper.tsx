import { Navigate } from "react-router-dom";

export const redirectByRole = (roles: string[]) => {
  switch (roles[0]) {
    case "administrador":
      return <Navigate to="/admin" />;
    case "beneficiario":
      return <Navigate to="/recipient" />;
    case "provedor":
      return <Navigate to="/provider" />;
    case "padrinho":
      return <Navigate to="/supporter" />;
    default:
      return <Navigate to="/not-found" />;
  }
};
