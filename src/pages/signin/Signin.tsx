import { useKeycloak } from "../../hooks/useKeycloak";
import { redirectByRole } from "../../helpers/Keycloak.helper";

function Signin() {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  return redirectByRole(keycloak.tokenParsed?.realm_access?.roles ?? [""]);
}

export default Signin;
