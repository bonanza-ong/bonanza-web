import { useKeycloak } from "../../hooks/useKeycloak";
import { redirectByRole } from "../../helpers/Keycloak.helper";
import { usePostUser } from "../../api/routes/users/mutations";

function Signup() {
  const { keycloak } = useKeycloak();
  const signup = usePostUser();

  if (!keycloak.authenticated) {
    keycloak.register().then(async () => {
      await signup.mutateAsync();
    });
    return null;
  }

  return redirectByRole(keycloak.tokenParsed?.realm_access?.roles ?? [""]);
}

export default Signup;
