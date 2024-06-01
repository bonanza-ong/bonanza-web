import { useKeycloak } from "../../hooks/useKeycloak";
import { redirectByRole } from "../../helpers/Keycloak.helper";
import { Navigate } from "react-router-dom";

function Signup() {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.register().then(() => {
      return <Navigate to="/assignrole" />;
    });
  }

  return redirectByRole(keycloak.tokenParsed?.realm_access?.roles ?? [""]);
}

export default Signup;
