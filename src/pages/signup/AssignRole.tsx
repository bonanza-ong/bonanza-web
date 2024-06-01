import { useKeycloak } from "../../hooks/useKeycloak";
import { isFullyRegistred } from "../../helpers/Keycloak.helper";
import { Navigate } from "react-router-dom";
import { usePostPerson } from "../../api/routes/persons/mutations";
import { usePostSupporter } from "../../api/routes/supporters/mutations";
import { Box, Button, Container, Typography } from "@mui/material";

function AssignRole() {
  const { keycloak } = useKeycloak();
  const person = usePostPerson();
  const supporter = usePostSupporter();

  if (
    keycloak.authenticated &&
    isFullyRegistred(keycloak.tokenParsed?.realm_access?.roles ?? [""])
  ) {
    return <Navigate to="/not-found" />;
  }

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          bgcolor: "white",
          p: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <Typography fontWeight={"bold"} variant="h4">
          SELECIONE SEU PAPEL
        </Typography>
        <Typography fontWeight={"thin"} variant="h6">
          NA PLATAFORMA
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "1rem",
            gap: "1rem",
          }}
        >
          <Button
            sx={{ width: "10rem" }}
            variant="contained"
            size="large"
            onClick={async () => {
              await person.mutateAsync();
            }}
          >
            Beneficiário
          </Button>
          <Button
            sx={{ width: "10rem" }}
            variant="contained"
            size="large"
            onClick={async () => {
              await supporter.mutateAsync();
            }}
          >
            Padrinho
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AssignRole;
