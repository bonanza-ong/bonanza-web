import { Navigate } from "react-router-dom";

export const redirectByRole = (roles: string[]) => {
  for (let index = 0; index < roles.length; index++) {
    switch (roles[index]) {
      case "administrador":
        return <Navigate to="/administrator" />;
      case "beneficiario":
        return <Navigate to="/recipient" />;
      case "provedor":
        return <Navigate to="/provider" />;
      case "padrinho":
        return <Navigate to="/supporter" />;
    }
    index++;
  }

  return <Navigate to="/not-found" />;
};

export const isFullyRegistred = (roles: string[]) => {
  return roles.some(
    (role) =>
      role === "beneficiario" ||
      role === "provedor" ||
      role === "padrinho" ||
      role === "administrador",
  );
};
